// =============================
// Import React & React Native Libraries
// =============================
import React, { useState, useEffect, useRef } from 'react';
import { 
  View, Text, StyleSheet, TouchableOpacity, Modal, Linking, Alert, 
  TextInput, ScrollView, Animated, Easing 
} from 'react-native';

// UI components from React Native Paper (material design)
import { Button, Card } from 'react-native-paper';

// Map functionality and UI
import MapView, { Marker, Callout } from 'react-native-maps';

// Picker components for dropdown selections
import { Picker } from '@react-native-picker/picker';
import RNPickerSelect from 'react-native-picker-select';

// Date and time pickers
import DateTimePicker from '@react-native-community/datetimepicker';
import { TimerPickerModal } from "react-native-timer-picker";

// Calendar component with localization
import { Calendar, LocaleConfig } from 'react-native-calendars';

// Wheel-style picker (iOS-style)
import WheelPicker from 'react-native-wheel-picker-expo';

// Navigation utilities
import { CommonActions } from '@react-navigation/native';

// Get constants from Expo (e.g., app version, device info)
import Constants from 'expo-constants';

// =============================
// Import Custom Modules / Functions
// =============================

// UI logic and business logic for place and car selection
import { selectPlaces } from './parts/selectPlaces';
import { selectCars } from './parts/selectCars';

// Functions to handle saving and updating user/admin data
import { saveUser } from './parts/handleSaveUser';
import { updateUser } from './parts/updateUser';
import { saveAdminProfile } from './parts/saveAdminProfile';
import { getUserArray } from './parts/getUserArray';
import { updateEditedCar } from './parts/updateEditedCar';
import { getOneUser } from './parts/getOneUser';

// Import assortment data (likely predefined static data)
import assortments from "./data/assortment";

// =============================
// Import Stylesheets
// =============================
// Multiple style objects for different parts of the UI
import {
  styles, map, carsStyles, edittedOneForm, aboutStyles,
  stylesUsers, formStyles, s, stylesForm, modernStyles, personProfile
} from './parts/other/colors';

// =============================
// Main Component: HomeScreen
// =============================
const HomeScreen = ({ route, navigation }) => {

// ==========================
// Parameters from Login Screen
// ==========================
const { role, userName } = route.params;  // Role and username passed from loginScreen.js

// ==========================
// User Info and Profile States
// ==========================
const [isAdmin, setIsAdmin] = useState(false);                  // Determines if user has admin role
const [showProfile, setShowProfile] = useState(false);          // Toggles user profile modal
const [editProfile, setEditProfile] = useState(false);          // Toggles profile edit mode
const [userNameFromDB, setUserNameFromDb] = useState('');       // Username fetched from DB
const [newUserName, setNewUserName] = useState('');             // New username input
const [newUserPassword, setNewUserPassword] = useState('');     // New user password input
const [newUsers, setNewUsers] = useState([{ name: '', password: '' }]); // Temp user list for creation
const [usersData, setUsersData] = useState([]);                 // Fetched user data from DB
const [usersInfo, setUsersInfo] = useState(false);              // Toggles user info view
const [name, setName] = useState('Logged User');                // Display name for current user

// ==========================
// Car Management States
// ==========================
const [carCount, setCarCount] = useState(0);                    // Number of available cars
const [otherCount, setOtherCount] = useState(0);                // Number of other vehicles
const [manageCar, setManageCar] = useState(false);              // Toggle car management view
const [editCarUser, setEditCarUser] = useState('');             // Username assigned to edited car
const [addedUserCar, setAddedUserCar] = useState('');           // Newly added user-car pairing
const [editCarList, setEditCarList] = useState(false);          // Toggle car list edit mode
const [editCar, setEditCar] = useState(false);                  // Toggle individual car edit
const [carOptions, setCarOptions] = useState([]);               // List of selectable cars
const [editingCar, setEditingCar] = useState({ label: "", value: "" }); // Car currently being edited
const [selectedPickedCar, setSelectedPickedCar] = useState("Golf- 0A44e"); // Default selected car
const [newAddedCarName, setNewAddedCarName] = useState('');     // Name for newly added car
const [newAddedSPZ, setNewAddedSPZ] = useState('');             // SPZ (license plate) for new car
const [newLabel, setNewLabel] = useState('');                   // Label for car option
const [newValue, setNewValue] = useState('');                   // Value for car option

// ==========================
// Location and Map States
// ==========================
const [selectedPlace, setSelectedPlace] = useState(null);       // Place selected by user
const [clickedCoordinates, setClickedCoordinates] = useState(null); // Coordinates from map click
const [coordinates, setCoordinates] = useState(null);           // Main coordinate state
const [cordinates, setCordinates] = useState(null);             // (Typo) - might be duplicate
const [lat, setLat] = useState(null);                           // Latitude value
const [GPS, setGPS] = useState(null);                           // Full GPS location
const [title, setTitle] = useState(null);                       // Title for selected place
const [locations, setLocations] = useState([]);                 // List of locations/places
const [markers, setMarkers] = useState([]);                     // Map markers
const [selectedMarker, setSelectedMarker] = useState(null);     // Marker selected by user
const [editStateOfPlace, setEditStateofPlace] = useState(false); // Toggle place edit mode

// ==========================
// Date & Time Management
// ==========================
const [showDatePicker1, setShowDatePicker1] = useState(false);  // Toggle first date picker
const [showTimePicker1, setShowTimePicker1] = useState(false);  // Toggle first time picker
const [showDatePicker2, setShowDatePicker2] = useState(false);  // Toggle second date picker
const [showTimePicker2, setShowTimePicker2] = useState(false);  // Toggle second time picker

const [date1, setDate1] = useState(new Date());                 // Start date
const [tempDate1, setTempDate1] = useState(new Date());         // Temp start date (for selection)
const [tempTime1, setTempTime1] = useState(new Date());         // Temp start time
const [tempDate2, setTempDate2] = useState(new Date());         // Temp end date
const [tempTime2, setTempTime2] = useState(new Date());         // Temp end time
const [date2, setDate2] = useState(null);                       // End date

const [time1, setTime1] = useState({ hours: 0, minutes: 0 });   // Start time (structured)
const [time2, setTime2] = useState({ hours: 0, minutes: 0 });   // End time (structured)

const [secondsLeft, setSecondsLeft] = useState(270);            // Timer countdown
const [appUsageTime, setAppUsageTime] = useState(0);            // Total app usage time
const [startTime, setStartTime] = useState(null);               // App start time

// ==========================
// Form & UI Interaction States
// ==========================
const [showAddCarForm, setAddCarForm] = useState(false);        // Toggle add car form
const [editMenuForm, setEditForm] = useState(false);            // Toggle menu edit form
const [btnCreateNew, setBtnCreateNew] = useState(false);        // State for "create new" button
const [hasChanges, setHasChanges] = useState(false);            // Track unsaved form changes
const [showForm, setShowForm] = useState(false);                // Toggle generic form visibility
const [selectedOption, setSelectedOption] = useState('');       // Currently selected dropdown option
const [foundedEditID, setFoundedEditID] = useState('');         // ID of entity being edited
const [formStep, setFormStep] = useState(1);                    // Step in multi-step form

// ==========================
// Miscellaneous States
// ==========================
const [visibleCount, setVisibleCount] = useState(10);           // How many items to show initially
const [showRecords, setShowRecords] = useState(false);          // Toggle records view
const [foundName, setFoundName] = useState('');                 // Filtered name result
const [foundAmount, setFoundAmount] = useState('');             // Filtered amount result
const [maxAmount, setMaxAmount] = useState(0);                  // Maximum allowed value
const [amount, setAmount] = useState(0);                        // Current amount value
const [isSaving, setIsSaving] = useState(false);                // Tracks save process
const [showAboutApp, setShowAboutApp] = useState(false);        // Toggle "About App" modal
const [newPassword, setNewPassword] = useState('');             // New password input
const [colors, setColors] = useState([]);                       // Theme or data-related color array
const [selectedTree, setSelectedTree] = useState(1);            // Selected tree type (e.g. spruce = 1)
const [testX, setTestX] = useState(new Date());                 // Testing state (purpose unclear)
const [showErrorPage1, setShowErrorPage1] = useState(false);
const [showErrorPage2, setShowErrorPage2] = useState(false);
// ==========================
// Animation
// ==========================
const fadeAnim = useRef(new Animated.Value(1)).current;         // Animation value for fade-in/out

// ==========================
// Constants from App Config
// ==========================
const APICODE = encodeURIComponent(Constants.expoConfig.extra.API);  // Encoded API key from config
const URL = Constants.expoConfig.extra.URL;                          // Base URL from config

// ==========================
// Assortment, Wood, Filtering, Pagination
// ==========================
const [selectedSortiment, setSelectedSortiment] = useState('');      // Selected assortment type
const [errorMessage, setErrorMessage] = useState("");                // Error message display

const [touchedStep1, setTouchedStep1] = React.useState(false);       // Track step 1 form interaction
const [touchedStep2, setTouchedStep2] = React.useState(false);       // Track step 2 form interaction
const [filteredItems, setFilteredItems] = useState([]);              // Filtered list of items
const [foundId, setFoundId] = useState(0);                           // ID found in search/filter
const [modalPage, setModalPage] = useState(1);                       // Current modal page view

const [selectedCarCount, setSelectedCarCount] = useState(0);         // Number of selected cars
const [selectedTreeType, setSelectedTreeType] = useState(1);         // Selected tree type

// ==========================
// Výběr a filtrování (admin)
// ==========================
const [adminSelectedWood, setSelectedWood] = useState(1);              // Vybraný typ dřeva (např. smrk, borovice) – pro admina
const [adminSelectedAssortment, setSelectedAssortment] = useState(1); // Vybraný sortiment (kategorie zboží) – pro admina
const [adminFilteredData, setAdminFilteredData] = useState("");    
   // Výsledek filtrování dat podle dřeva/sortimentu



{selectedMarker && isAdmin && (
  <Modal
    transparent
    animationType="slide"
    visible={selectedMarker !== null}
    onRequestClose={closeMarkerModal} // Zavře modal při pokusu o zavření (např. gesture na Androidu)
  >
    <View style={map.modalContainer}>
      <View style={map.modalContent}>

        {/*  Plovoucí tlačítko pro zavření modalu */}
        <TouchableOpacity onPress={closeMarkerModal} style={map.floatingClose}>
          <Text style={map.closeIcon}>✕</Text>
        </TouchableOpacity>

        {/*  Tlačítko pro přepnutí do režimu úpravy stavu místa */}
        {!btnCreateNew && (
          <TouchableOpacity
            onPress={() => setEditedPlace(map.modalTitle)}
            style={map.editStateButton}
          >
            <Text style={map.editStateText}>Upravit stav</Text>
          </TouchableOpacity>
        )}

        {/* 🏷️ Titulek markeru */}
        <Text style={map.modalTitle}>{selectedMarker.title}</Text>

        {/* 📄 Stránka 1 – Základní údaje: počet vozidel + dřevina */}
        {modalPage === 1 && (
          <>
            <View style={map.section}>

              {/* 🚗 Počet vozidel */}
              <View style={map.card}>
                <Text style={map.cardLabel}>Počet vozidel</Text>
                <TextInput
                  style={map.counter}
                  keyboardType="numeric"
                  value={carCount === 0 ? "" : String(carCount)}
                  onChangeText={(text) => {
                    if (text === "") {
                      setCarCount(0);
                      return;
                    }
                    if (/^\d+$/.test(text)) {
                      setCarCount(parseInt(text, 10));
                    }
                  }}
                />
              </View>

              {/* 🌲 Výběr dřeviny (Picker) */}
              <View style={map.card}>
                <Text style={map.cardLabel}>Dřevina</Text>
                <View style={map.pickerContainer}>
                  <Picker
                    selectedValue={selectedSortiment}
                    onValueChange={setSelectedSortiment}
                    style={map.st}
                  >
                    {adminFilteredData && adminFilteredData.length > 0 &&
                    adminFilteredData.some(item => item.id === selectedSortiment) ? (
                      // ✅ Pokud je hodnota dostupná v datech – zobrazit dynamicky
                      adminFilteredData.map(item => (
                        <Picker.Item key={item.id} label={item.name} value={item.id} />
                      ))
                    ) : (
                      // ❌ Pokud není – fallback nabídka
                      <>
                        <Picker.Item label="Buk" value="buk" />
                        <Picker.Item label="Dub" value="dub" />
                        <Picker.Item label="Smrk" value="smrk" />
                        <Picker.Item label="Borovice" value="borovice" />
                        <Picker.Item label="Vlastní" value="custom" />
                      </>
                    )}
                  </Picker>
                </View>
              </View>

            </View>

            {/* 🔜 Tlačítko pro přechod na další stránku modalu */}
            <View style={map.actions}>
              <TouchableOpacity
                onPress={() => setModalPage(2)}
                style={map.primaryBtn}
              >
                <Text style={map.primaryText}>Pokračovat</Text>
              </TouchableOpacity>
            </View>
          </>
        )}

        {/* 📄 Stránka 2 – Sortiment a množství */}
        {modalPage === 2 && (
          <>
            <View style={map.section}>

              {/* 📦 Výběr sortimentu */}
              <View style={map.card}>
                <Text style={map.cardLabel}>Vyberte sortiment</Text>
                <View style={map.pickerContainer}>
                  {adminFilteredData.length > 0 ? (
                    adminFilteredData.map(item => (
                      <Picker.Item key={item.id} label={item.name} value={item.id} />
                    ))
                  ) : (
                    <Text style={map.itemText}>Žádné položky</Text>
                  )}
                </View>
              </View>

              {/* 🔢 Zadání množství */}
              <View style={map.card}>
                <Text style={map.cardLabel}>Množství</Text>
                <TextInput
                  style={map.countfer}
                  keyboardType="numeric"
                  value={amount === 0 ? "" : String(amount)}
                  onChangeText={(text) => setAmount(parseInt(text, 10) || 0)}
                />
              </View>

            </View>

            {/* 🧭 Akční tlačítka pro uložení, smazání a návrat */}
            <View style={map.actions}>
              <TouchableOpacity
                onPress={btnCreateNew ? saveNewMarker : saveCarCount}
                style={map.primaryBtn}
              >
                <Text style={map.primaryText}>
                  {btnCreateNew ? 'Vytvořit' : 'Uložit'}
                </Text>
              </TouchableOpacity>

              {/* 🗑️ Smazání markeru */}
              <TouchableOpacity onPress={deleteMarker} style={map.deleteBtn}>
                <Text style={map.deleteText}>Smazat</Text>
              </TouchableOpacity>

              {/* 🔙 Zpět na první stránku modalu */}
              <TouchableOpacity
                onPress={() => setModalPage(1)}
                style={map.secondaryBtn}
              >
                <Text style={map.secondaryText}>Zpět</Text>
              </TouchableOpacity>
            </View>
          </>
        )}

      </View>
    </View>
  </Modal>
)}

// =========================
// Informace o vozidle
// =========================
const [carInfo, setCarInfo] = useState({
  carName: "",     // Název aktuálně vybraného vozidla
  spz: "",         // SPZ aktuálně vybraného vozidla
  full: "",        // Spojené info (např. pro zobrazení v Pickeru)

  preName: "",     // Předchozí název (pro porovnání nebo reset)
  preSPZ: "",      // Předchozí SPZ
  preFull: ""      // Předchozí kombinace název+SPZ
});


// =========================
// Lokalizace – české názvy měsíců a dní
// =========================
LocaleConfig.locales['cs'] = {
  monthNames: [
    'leden', 'únor', 'březen', 'duben', 'květen', 'červen',
    'červenec', 'srpen', 'září', 'říjen', 'listopad', 'prosinec'
  ],
  monthNamesShort: [
    'led', 'úno', 'bře', 'dub', 'kvě', 'čer',
    'čvc', 'srp', 'zář', 'říj', 'lis', 'pro'
  ],
  dayNames: [
    'pondělí', 'úterý', 'středa', 'čtvrtek', 'pátek', 'sobota', 'neděle'
  ],
  dayNamesShort: ['Ne', 'Po', 'Út', 'St', 'Čt', 'Pá', 'So'],
  today: 'Dnes'
};

// Nastaví výchozí jazyk kalendáře na češtinu
LocaleConfig.defaultLocale = 'cs';


// =========================
// Výchozí region mapy
// =========================
const [region, setRegion] = useState({
  latitude: 49.7,         // Střed mapy (zeměpisná šířka)
  longitude: 15.28,       // Střed mapy (zeměpisná délka)
  latitudeDelta: 0.01,    // Zoom ve směru sever-jih
  longitudeDelta: 0.01    // Zoom ve směru východ-západ
});


// =========================
//  Čas – výběr hodin a minut
// =========================
const [hour, setHour] = useState('12');     // Aktuálně vybraná hodina (ve formátu "HH")
const [minute, setMinute] = useState('00'); // Aktuálně vybraná minuta (ve formátu "MM")

// Generuje pole pro výběr hodin (00–23) – vhodné pro např. WheelPicker
const hours = Array.from({ length: 24 }, (_, i) => ({
  label: `${i < 10 ? '0' + i : i}`,  // "01", "02", ..., "23"
  value: `${i < 10 ? '0' + i : i}`
}));

// Generuje pole pro výběr minut (00–59)
const minutes = Array.from({ length: 60 }, (_, i) => ({
  label: `${i < 10 ? '0' + i : i}`,  // "00", "01", ..., "59"
  value: `${i < 10 ? '0' + i : i}`
}));
// =========================
//  Sledování změn data (testovací účel)
// =========================
useEffect(() => {
  // Tento useEffect bude reagovat na změnu proměnné `testX`
  // Aktuálně neprovádí žádnou akci – vhodné pro budoucí logiku
  // console.log("Selected date:", testX);
}, [testX]);


// =========================
//  Funkce pro ovládání zoomu na mapě
// =========================

// Zvětší mapu – sníží hodnotu delta (více přiblížený pohled)
const zoomIn = () => {
  setRegion((prev) => ({
    ...prev,
    latitudeDelta: prev.latitudeDelta / 2,
    longitudeDelta: prev.longitudeDelta / 2,
  }));
};

// Oddálí mapu – zvýší hodnotu delta (více oddálený pohled)
const zoomOut = () => {
  setRegion((prev) => ({
    ...prev,
    latitudeDelta: prev.latitudeDelta * 2,
    longitudeDelta: prev.longitudeDelta * 2,
  }));
};


// =========================
//  Navigace mezi kroky formuláře
// =========================

// Přechod na předchozí krok
const goToPreviousStep = () => setFormStep(formStep - 1);

// Přechod na další krok (bez validace)
const goToNextStep = () => setFormStep(formStep + 1);


// =========================
//  Validace formuláře a přechod na další krok
// =========================
const handleNextStepValidated = () => {
  if (formStep === 1) {
    if (!selectedOption) {
      setErrorMessage("Vyberte prosím auto.");
      return;
    }
    if (foundAmount === 0) {
      setErrorMessage("Není dostupné množství.");
      return;
    }
  }

  if (formStep === 2) {
    if (!selectedSortiment) {
      setErrorMessage("Vyberte prosím sortiment.");
      return;
    }
    if (!amount || amount <= 0) {
      setErrorMessage("Zadejte platné množství.");
      return;
    }
  }

  // Pokud je vše v pořádku:
  setErrorMessage("");       // Vymazat chybovou hlášku
  fadeAnim.setValue(0);      // Restart animace (např. přechod efektu)
  setFormStep(formStep + 1); // Posun na další krok formuláře
};


// =========================
//  Obnovení obrazovky a návrat na 'Home'
// =========================
const refresh = () => {
  navigation.dispatch(
    CommonActions.reset({
      index: 0, // nastavení indexu na první obrazovku
      routes: [
        {
          name: 'Home',
          params: {
            role: role,         // předání role uživatele (např. admin, user)
            userName: userName, // předání jména uživatele
          },
        },
      ],
    })
  );
};


// =========================
//  Načtení barev pointerů z API
// =========================
const getPointerColors = async () => {
  const code = Constants.expoConfig.extra.CODE; // unikátní kód uživatele
  try {
    const url = `${URL}rest-api/app?getColors&userCode=${code}&APICODE=${APICODE}`;
    const response = await fetch(url);

    if (!response.ok) {
      //  Nezachycená chyba – možná chybí `throw` nebo alert
      return;
    }

    const data = await response.json();
    setColors([...data]); // Aktualizace barev s novou referencí (nutné pro React)
  } catch (error) {
    alert(error); // Výpis chyby uživateli
  }
};


// =========================
//  Zavolání `getPointerColors` po prvním načtení komponenty
// =========================
useEffect(() => {
  getPointerColors();
}, []);


// Animace pro změnu formulářového kroku (fade in)
useEffect(() => {
  fadeAnim.setValue(0); // začneme od neviditelného stavu
  Animated.timing(fadeAnim, {
    toValue: 1,          // animace do plné viditelnosti
    duration: 300,       // trvá 300ms
    useNativeDriver: true,
  }).start();
}, [formStep]);         // závislost na aktuálním kroku formuláře

// Aktualizuj dočasné datum pokud se změní date1
useEffect(() => {
  if (date1) setTempDate1(date1);
}, [date1]);

// Nastav isAdmin podle role uživatele
useEffect(() => {
  setIsAdmin(role === "admin");
}, [role]);

// Synchronizuj username z DB při změně userName
useEffect(() => {
  setUserNameFromDb(userName)
}, [userName]);

// Funkce pro zvýšení množství, maximálně na maxAmount
const increaseAmount = () => {
  setFoundAmount(prev => {
    if (prev < maxAmount) return prev + 1;
    return prev;
  });
};

// Funkce pro snížení množství, minimálně na 0
const decreaseAmount = () => {
  setFoundAmount(prev => {
    if (prev > 0) return prev - 1;
    return prev;
  });
};

// Pravidelné aktualizování míst každou sekundu
useEffect(() => {
  const interval = setInterval(async () => {
    try {
      const data = await selectPlaces();
      setLocations(data);
    } catch (error) {
      // console.error("Chyba při načítání míst:", error);
    }
  }, 1000); // 1 sekunda

  // Vyčištění intervalu při unmountu komponenty
  return () => clearInterval(interval);
}, []);

// Ref pro ukládání ID intervalu pro pozdější čištění
const intervalRef = useRef(null);

// Alternativní fetch míst - opakuje načítání každou sekundu
const fetchPlaces = async () => {
  try {
    const data = await selectPlaces();
    setLocations(data);
  } catch (error) {
    // some error
  }
};

useEffect(() => {
  intervalRef.current = setInterval(fetchPlaces, 1000);

  return () => clearInterval(intervalRef.current);
}, []);

// Načti možnosti aut z API při mountu
useEffect(() => {
  const loadCars = async () => {
    const cars = await selectCars();
    setCarOptions(cars);
  };
  loadCars();
}, []);


// 🎄 Filtrování sortimentu podle vybrané dřeviny (běžný uživatel)
useEffect(() => {
  // Prochází všechny dostupné dřeviny a hledá tu, která odpovídá selectedTree
  const filtered = assortments.map(item => {
    if (item.id === Number(selectedTree)) {
      return item.items; // Vrátí seznam položek sortimentu pro danou dřevinu
    }
    return null; // Pokud nesouhlasí ID, vrátí null
  }).filter(Boolean); // Odstraní všechny null hodnoty (ignorované položky)

  // Pokud filtr něco našel, uloží první odpovídající sadu položek
  if (filtered.length > 0) {
    setFilteredItems(filtered[0]);
  } else {
    setFilteredItems([]); // Pokud nic nenalezeno, vymaže staré položky
  }

  console.log(filtered); // Debug: výpis výsledku filtrace
}, [selectedTree, adminSelectedWood]); // Spustí se při změně selectedTree nebo adminSelectedWood


// 🌲 Filtrování sortimentu pro admina (např. při editaci v modálním okně)
useEffect(() => {
  // Pokud admin nic nevybral, resetuje stav a ukončí
  if (!adminSelectedWood) {
    setSelectedWood(0);
    setAdminFilteredData([]);
    return;
  }

  // Najde v seznamu dřevin tu, která odpovídá výběru admina, a získá její sortiment
  const filtered = assortments
    .map(item => (item.id === Number(adminSelectedWood) ? item.items : null))
    .filter(Boolean); // Odstraní null hodnoty

  // Pokud něco nalezeno, uloží, jinak nastaví prázdné pole
  setAdminFilteredData(filtered.length > 0 ? filtered[0] : []);
}, [adminSelectedWood, modalPage]); // Spustí se při změně adminSelectedWood nebo při přepnutí stránky v modalu


// ℹ️ Načítání detailních informací o položce z API
const getMoreInfo = async (id) => {
  const url = `${URL}rest-api/moreInfo.php?infoPage=true&id=${encodeURIComponent(id)}`;
  
  try {
    const response = await fetch(url); // Odeslání požadavku na API
    const data = await response.json(); // Zpracování odpovědi

    // Kontrola, zda odpověď není chybová
    if (!response.ok) {
      throw new Error(data.error || 'Network response was not ok');
    }

    // Pokud server vrátil chybu, vyhoď ji
    if (data.error) {
      throw new Error(data.error);
    }

    return data; // Vrátí data dál pro zpracování
  } catch (error) {
    throw error; // Propaguje chybu do volající funkce
  }
};



// 💾 Uložení aktualizovaných údajů o uživateli (např. změna hesla, auta)
const handleSaveUser = async () => {
  setIsSaving(true); // Aktivuje indikaci ukládání (např. spinner)

  // Volá API pro uložení údajů
  const result = await saveUser({
    name,
    newPassword,
    selectedPickedCar,
    foundedEditID
  });

  setIsSaving(false); // Vypne indikaci ukládání

  if (result.success) {
    // ✅ Úspěšné uložení
    Alert.alert(
      "✅ Hotovo!",
      "Uživatel byl úspěšně aktualizován.",
      [{ text: "OK", style: "default" }],
      { cancelable: true }
    );
    await loadUsers(); // Znovu načte uživatele ze serveru
  } else {
    // ❌ Chyba při ukládání
    Alert.alert(
      "❌ Chyba",
      result.error ? result.error : "Nastala neznámá chyba. Zkuste to prosím znovu.",
      [{ text: "OK", style: "default" }],
      { cancelable: true }
    );
  }
};


// 👥 Načítání seznamu uživatelů z API
const loadUsers = async () => {
  const result = await getUserArray();

  if (result.success) {
    setUsersData(result.data); // Uloží seznam uživatelů do stavu
  } else {
    // Zde by bylo možné zobrazit chybu (nyní se ignoruje)
    // Např. console.warn("Nepodařilo se načíst uživatele:", result.error);
  }
};


// 🕘 Spuštění načtení uživatelů při načtení komponenty
useEffect(() => {
  loadUsers();
}, []);


// 🛡️ Uložení změn v profilu správce (např. jméno, heslo)
const handleSaveProfile = async () => {
  const result = await saveAdminProfile({ name, newPassword });

  if (result.success) {
    // ✅ Úspěch
    Alert.alert(
      "✅ Hotovo!",
      result.message || "Akce proběhla úspěšně.",
      [{ text: "OK", style: "default" }],
      { cancelable: true }
    );
  } else {
    // ❌ Chyba
    Alert.alert(
      "❌ Došlo k chybě",
      result.error || "Objevila se neočekávaná chyba. Zkuste to prosím znovu.",
      [{ text: "OK", style: "cancel" }],
      { cancelable: true }
    );
  }
};


// Přidání auta do systému
const handleAddCar = async () => {
  // Kontrola, zda jsou vyplněny povinné údaje
  if (newAddedCarName && newAddedSPZ) {
    let url = `${URL}rest-api/app?addCar&name=${newAddedCarName}&spz=${newAddedSPZ}&APICODE=${APICODE}`;

    try {
      const response = await fetch(url);
      const data = await response.json();  // Parsování JSON odpovědi

      if (data.error) {
        // Zobraz alert s chybou
        Alert.alert(
          " Došlo k chybě",
          data.error || "Objevila se neočekávaná chyba. Zkuste to prosím znovu.",
          [{ text: "OK", style: "default" }],
          { cancelable: true }
        );
      } else if (data.success) {
        // Zobraz alert s úspěchem a aktualizuj seznam aut
        Alert.alert(
          " Přidání úspěšné",
          "Auto bylo úspěšně přidáno do systému.",
          [{ text: "Super!", style: "default" }],
          { cancelable: true }
        );
        const updatedCars = await selectCars();
        setCarOptions(updatedCars);
      }
  
    } catch (err) {
      Alert.alert(
        " Nepodařilo se přidat auto",
        "Něco se pokazilo při přidávání auta. Zkuste to prosím znovu.",
        [{ text: "Rozumím", style: "cancel" }],
        { cancelable: true }
      );
    }
  } else {
    // Pokud nejsou všechny údaje vyplněny
    Alert.alert(
      " Chybějící údaje",
      "Prosím, vyplňte všechny povinné položky.",
      [{ text: "Rozumím", style: "cancel" }],
      { cancelable: true }
    );
  }
};

// Načti uživatele pro editaci, pokud je formulář pro editaci aktivní a je vybrané ID
useEffect(() => {
  if (editMenuForm && foundedEditID !== 0) {
    getOneUser(foundedEditID, setName, setEditCarUser);
  }
}, [editMenuForm, foundedEditID]);

// Načti uživatele pokaždé, když se změní foundedEditID
useEffect(() => {
  getOneUser();
}, [foundedEditID]);

// Vytvoření nového uživatele
const handleCreateUser = async () => {
  if (newUserName && newUserPassword) {
    // Nějaké kódy (user, numeric, code) - možná bezpečnostní tokeny
    const user = Constants.expoConfig.extra.CREATE_USER;
    const numeric = Constants.expoConfig.extra.CREATE_NUMERIC_CODE;
    const code = Constants.expoConfig.extra.CREATE_USER_CODE;

    let car = addedUserCar.trim(); // Odstranění mezer
    let carData = {}; // výchozí prázdný objekt

    if (car !== "") {
      const carArray = car.split("_");
      if (carArray.length >= 2) {
        carData = {
          label: carArray[0],
          value: carArray[1],
        };
      }
    }

    // Zakóduj auto jako JSON string
    const encodedCar = encodeURIComponent(JSON.stringify(carData));

    const insertEndPoint = `${URL}rest-api/app?APICODE=${APICODE}&createUser&username=${encodeURIComponent(newUserName)}&password=${encodeURIComponent(newUserPassword)}&code=${encodeURIComponent(code)}&user=${encodeURIComponent(user)}&numeric=${encodeURIComponent(numeric)}&car=${encodedCar}`;

    try {
      const response = await fetch(insertEndPoint);
      const rawText = await response.text();

      if (response.headers.get('Content-Type')?.includes('application/json')) {
        const data = JSON.parse(rawText);
       
        if (data.message === "User successfully created in the database") {
          Alert.alert(
            "✅ Hotovo!",
            "Uživatel byl úspěšně vytvořen.",
            [{ text: "OK", style: "default" }],
            { cancelable: true }
          );
          await loadUsers();
        } else if (data.msg && data.msg.includes("already exists")) {
          Alert.alert(
            " Upozornění",
            `Uživatel s jménem ${newUserName} již existuje.`,
            [{ text: "OK", style: "default" }],
            { cancelable: true }
          );
        } else {
          alert(' Něco se stalo, zkuste se připojit na internet');
        }
      } else {
        Alert.alert(
          " Pozor",
          "Něco se stalo, zkuste se připojit na internet.",
          [{ text: "OK" }],
          { cancelable: true }
        );
      }
    } catch (error) {
      Alert.alert(
        "❌ Chyba",
        "Něco se pokazilo, zkuste to znovu.",
        [{ text: "OK" }],
        { cancelable: true }
      );
    }
  }

    
      //-------------------- RELOAD A USER DATA ARRAY---------------------

  useEffect(() => {
    getUser(); // Fetch data when the component mounts
    getUserArray();
  }, []);
};

  //-------------------- GET ALL USERS FROM DATABASE---------------------
const getUser = async () => {
  const adminKey = Constants.expoConfig.extra.ADMIN_KEY;  
  const selectKey = Constants.expoConfig.extra.SELECT_KEY; 
  const code = Constants.expoConfig.extra.CODE;

  const url = `${URL}rest-api/app?lesykrikava.cz/rest-api/app?APICODE=${APICODE}&catchData&admin=${adminKey}&select=${selectKey}&code=${code}`;

  try {
    const response = await fetch(url);
    const result = await response.json(); // <-- this should be .json(), not .text()

    if (result.data) {
      // Update the state with the fetched data
      setUsersData(result.data); // <-- Add this to set the fetched data to state
    } else {
      // no result
    }
  } catch (err) {
   // Fetch error:", err
  }
};
// ⏱️ Periodické volání API každých 10 sekund pro aktualizaci dat
useEffect(() => {
  const intervalId = setInterval(() => {
    getUserArray();   // Načti pole uživatelů
    selectCars();     // Načti seznam aut
    selectPlaces();   // Načti místa
  }, 10000); // každých 10 sekund

  return () => clearInterval(intervalId); // Vyčisti interval při odchodu komponenty
}, []);


// -------------------- SLEDOVÁNÍ ČASU STRÁVENÉHO V APLIKACI --------------------
useEffect(() => {
  if (startTime) {
    const interval = setInterval(() => {
      const currentTime = Date.now(); // Aktuální čas
      const timeSpent = Math.floor((currentTime - startTime) / 1000); // čas v sekundách
      setAppUsageTime(timeSpent); // Aktualizuj čas strávený v aplikaci
    }, 1000); // každou sekundu

    return () => clearInterval(interval); // Vyčisti interval při změně startTime nebo unmountu
  }
}, [startTime]);


// -------------------- SPUŠTĚNÍ SLEDOVÁNÍ ČASU PŘI OTEVŘENÍ PROFILU --------------------
useEffect(() => {
  if (showProfile && !startTime) {
    startTrackingTime(); // Spusť sledování času
  }
}, [showProfile]);

// Funkce pro uložení počátečního času
const startTrackingTime = () => {
  setStartTime(Date.now());
};


// -------------------- NAČTI UŽIVATELE PŘI MOUNTU KOMPONENTY --------------------
useEffect(() => {
  getUser();      // Získá aktuálního přihlášeného uživatele
  getUserArray(); // Získá pole všech uživatelů
}, []);


// -------------------- GENERUJ NÁHODNÉ HESLO PRO UŽIVATELE --------------------
const generatePassword = () => {
  const randomPassword = Math.random().toString(36).slice(-8); // Generuj 8znakové heslo
  setNewUserPassword(randomPassword); // Nastav nové heslo pro nový účet
  setNewPassword(randomPassword);     // Nastav i interní proměnnou
};


// -------------------- ZMĚNA VSTUPŮ VE FORMULÁŘI NOVÉHO UŽIVATELE --------------------
const handleUserInputChange = (index, field, value) => {
  const updatedUsers = [...newUsers]; // Vytvoř kopii pole
  updatedUsers[index][field] = value; // Změň příslušné pole
  setNewUsers(updatedUsers);          // Aktualizuj stav
  setNewUserName(value);              // Ulož nové jméno uživatele
  setHasChanges(true);                // Označ, že jsou provedeny změny
};


// -------------------- ZAVŘENÍ MODALU PROFILU --------------------
const handleCloseModal = () => {
  setShowProfile(false);      // Skryj modal
  setNewUserName("");         // Resetuj jméno
  setNewUserPassword("");     // Resetuj heslo
};


// -------------------- PŘESUN DO SPRÁVY AUT --------------------
const setManageCarTrue = () => {
  setManageCar(true);        // Aktivuj režim správy aut
  setShowProfile(false);     // Skryj modal profilu
};


// -------------------- AKTIVACE EDITACE AUTA --------------------
const handleEdit = (user) => {
  setEditingCar(user);                        // Nastav právě editované auto
  setNewLabel(user.label.split("?")[0]);      // Předvyplň název auta
  setNewValue(user.label.split("?")[1]);      // Předvyplň SPZ nebo hodnotu
  setEditCar(true);                           // Otevři modal pro úpravu auta
};


// -------------------- AKTUALIZACE DAT AUTA --------------------
const updateEditedCar = async () => {
  if (!editingCar || !newLabel || !newValue) {
    Alert.alert(
      "Chyba",
      "Prosím vyplňte všechny údaje.",
      [{ text: "OK" }],
      { cancelable: true }
    );
    return;
  }

  const oldValue = editingCar.value.trim(); // Staré ID auta (např. `ford_123ABC`)
  const newCar = {
    label: `${newLabel.trim()} ? ${newValue.trim().toUpperCase()}`,     // Nový popisek
    value: `${newLabel.trim().toLowerCase()}_${newValue.trim().toUpperCase()}`, // Nové ID
  };

  try {
    const url = `${URL}rest-api/app?APICODE=${APICODE}&editOneCar&editCarInfo=${encodeURIComponent(JSON.stringify({ oldValue, newCar }))}`;

    const response = await fetch(url);
    const rawData = await response.text();
    const parsedData = JSON.parse(rawData);

    if (parsedData.success) {
      Alert.alert(
        "Hotovo!",
        "Auto bylo úspěšně aktualizováno.",
        [{ text: "OK" }],
        { cancelable: true }
      );

      // Aktualizuj lokální stav seznamu aut
      setCarOptions(prevOptions =>
        prevOptions.map(car =>
          car.value === oldValue ? newCar : car
        )
      );

      setEditCar(false); // Zavři editační modal
    } else {
      Alert.alert(
        "Chyba",
        "Aktualizace se nezdařila.",
        [{ text: "OK" }],
        { cancelable: true }
      );
    }
  } catch (error) {
    Alert.alert(
      "Chyba",
      "Chyba při připojení k serveru.",
      [{ text: "OK" }],
      { cancelable: true }
    );
  }
};

// Function to handle the update
const handleSaveEdit = async () => {
  const updatedCar = {
      label: newLabel, // New label after editing
      value: newValue, // New value after editing
  };

  try {
      const url = `${URL}rest-api/app?APICODE=${APICODE}&updateCarInfo=${encodeURIComponent(JSON.stringify(updatedCar))}`;
      const response = await fetch(url);

      // Log the raw response data before parsing
      const rawData = await response.text();
    

      if (!rawData) {
         // throw new Error("No response from server");
      }

      // Try to parse the JSON response
      let parsedData;
      try {
          parsedData = JSON.parse(rawData);
      } catch (err) {
       Alert.alert(" Chyba", "Nastala neočekávaná chyba, zkuste to prosím znovu.");

          return;
      }

      // Handle success or failure based on the response
      if (parsedData.success) {
      Alert.alert("✅ Hotovo!", "Auto bylo úspěšně aktualizováno.");
      } else {
         Alert.alert("❌ Chyba", "Aktualizace auta se nezdařila. Zkuste to prosím znovu.");

      }
  } catch (error) {
     Alert.alert("❌ Chyba", "Nepodařilo se připojit k serveru. Zkontrolujte připojení a zkuste to znovu.");

  }
};  
// -------------------- SMAZÁNÍ AUTA S POTVRZENÍM --------------------
const handleDelete = (car) => {
  // Zobraz potvrzovací dialog před smazáním
  Alert.alert(
    "Potvrzení",
    `Opravdu chcete smazat auto?`,
    [
      {
        text: "Zrušit",        // Uživatel se rozhodl zrušit
        style: "cancel",
      },
      {
        text: "Smazat",        // Pokud uživatel potvrdí, smaž auto
        style: "destructive",
        onPress: () => confirmDelete(car),
      },
    ],
    { cancelable: true }
  );
};

const confirmDelete = async (car) => {
  // Lokálně odeber auto ze stavu (z UI)
  const updatedCarOptions = carOptions.filter(
    (existingCar) => existingCar.value !== car.value
  );
  setCarOptions(updatedCarOptions);

  try {
    // Vytvoř URL pro smazání auta
    const url = `${URL}rest-api/app?APICODE=${APICODE}&deleteOneCar&deletedCarInfo=${encodeURIComponent(car.value)}`;
    const response = await fetch(url);
    const rawData = await response.text();

    // Pokus o parsování JSON odpovědi
    let parsedData;
    try {
      parsedData = JSON.parse(rawData);
    } catch (err) {
      // Pokud odpověď není validní JSON
      Alert.alert(
        "❌ Chyba",
        "Nepodařilo se smazat auto. Server vrátil neplatnou odpověď. Zkuste to prosím znovu."
      );
      return;
    }

    // Úspěšně smazáno
    if (parsedData.success) {
      Alert.alert("Hotovo!", "Auto bylo úspěšně smazáno.");
    } else {
      // Vrácení auta do stavu při chybě na serveru
      setCarOptions(prevOptions => [...prevOptions, car]);
      Alert.alert("❌ Chyba", "Nepodařilo se smazat auto. Prosím, zkuste to znovu.");
    }

  } catch (error) {
    // Vrácení auta zpět při selhání spojení
    setCarOptions(prevOptions => [...prevOptions, car]);
    Alert.alert(
      "⚠️ Připojení selhalo",
      "Nepodařilo se navázat spojení se serverem. Zkontrolujte prosím své připojení k internetu a zkuste to znovu."
    );
  }
};

// -------------------- ÚPRAVA UŽIVATELE --------------------
const editUser = (user) => {
  setName(user.jmeno || '');       // Nastav jméno do formuláře
  setNewPassword('');              // Vynuluj heslo (nebude se zobrazovat)
  setEditForm(true);               // Zobraz editační formulář
  setUsersInfo(false);             // Skryj info o uživatelích
  setFoundedEditID(user.id);       // Ulož ID uživatele pro úpravu

  // Parsuj přiřazené auto ze JSON formátu
  try {
    const parsed = JSON.parse(user.auta);
    if (parsed && parsed.value) {
      setSelectedPickedCar(parsed.value); // Vybraný vůz
    } else {
      setSelectedPickedCar("Žádné");      // Pokud žádný vůz není přiřazen
    }
  } catch (error) {
    setSelectedPickedCar("Žádné");        // Pokud selže JSON parse
  }
};

// -------------------- RESET FORMULÁŘE PRO NOVÉ UŽIVATELE --------------------
const resetForm = () => {
  setNewUsers([{ name: '', password: '' }]); // Vyčisti formulář
  setHasChanges(false);                      // Zruš příznak změn
  setNewUserPassword('');                    // Resetuj vygenerované heslo
  setNewUserName('');                        // Resetuj jméno
};

// -------------------- PŘIDÁNÍ NOVÉHO FORMULÁŘE (prázdný) --------------------
const addNewUserInput = () => {
  
};

// -------------------- VYTVOŘENÍ UŽIVATELE (nebo reset formuláře) --------------------
const handleCreateUsers = () => {
  if (newUserName || newUserPassword) {
    // Uživatel něco vyplnil – zobraz varování, že ztratí změny
    Alert.alert(
      "Máte neuložené změny",
      "Chcete opravdu pokračovat bez uložení změn?",
      [
        { text: "Zrušit", style: "cancel" },
        {
          text: "Pokračovat",
          onPress: () => {
            resetForm(); // Resetuj formulář
          },
        },
      ]
    );
  } else {
    resetForm(); // Pokud nebyly změny, rovnou resetuj
  }
};

// -------------------- KLIK NA MAPU – VYTVOŘENÍ NOVÉHO MÍSTA --------------------
const handleMapPress = async (e) => {
  // Pokud není admin, neumožni přidání bodu
  if (!isAdmin) return;

  if (isAdmin) {
    setEditStateofPlace(false); // Vypni editační režim
  }

  try {
    const { latitude, longitude } = e.nativeEvent.coordinate;
    setClickedCoordinates({ latitude, longitude }); // Ulož kliknuté souřadnice

    const ti = await geocode(latitude, longitude);  // Načti adresu podle souřadnic
    setShowForm(false);
    setCoordinates(`${latitude},${longitude}`);     // Ulož formátované souřadnice

    setEditStateofPlace(false);

    // Vytvoř nový objekt místa
    const newPlace = {
      ti,
      title: `${ti}`,
      description: `Popis pro místo na souřadnicích: ${latitude.toFixed(2)}, ${longitude.toFixed(2)}`,
      id: Math.random().toString(),
      carCount: 0,
      otherCount: 0,
    };

    setSelectedPlace(newPlace); // Vyber nové místo

    // Připrav marker pro mapu
    const newMarker = {
      latitude,
      longitude,
      title: newPlace.title,
      description: newPlace.description,
      id: newPlace.id,
      carCount: 0,
      otherCount: 0,
    };

    // Zjisti, jestli je místo nové (zatím vrací vždy true)
    let btnState = isPlaceNew();
    setBtnCreateNew(btnState);

    await selectPlaces(); // Znovu načti seznam míst z backendu

    // Přidej nový marker na mapu
    setMarkers(prevMarkers => [...prevMarkers, newMarker]);

  } catch (error) {
    Alert.alert('Chyba', 'Došlo k chybě při přidávání místa.');
  }
};

// Pomocná funkce – v aktuální podobě vždy vrací true
function isPlaceNew() {
  return true;
}

  
  function geocode(lat, lon) {
    const code = Constants.expoConfig.extra.GEOCODE;
    let url = `https://geocode.maps.co/reverse?lat=${lat}&lon=${lon}&api_key=${code}`;
  
    return fetch(url)
      .then(response => {
        // Ensure the response is OK and valid
        if (!response.ok) {
        //  throw new Error('Failed to fetch address data');
        }
        return response.json();
      })
      .then(data => {
        // Extract address components, providing defaults if they're missing
        const road = data.address?.road || ''; // Default to empty string if missing
        const suburb = data.address?.suburb || ''; // Default to empty string if missing
        const town = data.address?.town || ''; // Default to empty string if missing
        const country_code = data.address?.country_code || ''; // Default to empty string if missing
  
        // Build the address string, ensuring that we don't return 'undefined' or 'null'
        let addressParts = [road, suburb, town, country_code].filter(part => part); // Filters out empty parts
  
        // Join the valid parts of the address
        setTitle(addressParts.join(","))
        setGPS(`${lat},${lon}`)
        return addressParts.join(', ');
      })
      .catch(error => {
        return "Unable to fetch address";
      });
  }
  
    //-------------------- HADNLE CLICKED ON MAP(TARGET) ---------------------
   const handleMarkerPress = async (marker) => {
  setSelectedMarker(marker);
  setFoundId(marker.id); // stále aktualizujeme state
  setFoundName(marker.title);
  setCordinates(`${marker.latitude},${marker.longitude}`);

  if (isAdmin) {
    setEditStateofPlace(false);
    setShowForm(true);
  }

  console.log("Pressed marker ID:", marker.id);

  try {
    const res = await getMoreInfo(Number(marker.id)); // správně použij marker.id
    console.log("API response:", res);
    setSelectedWood(res.drevina);
    setSelectedSortiment(res.sortiment);
    setAmount(); // pokud máš, uveď parametr nebo výpočet
  } catch (err) {
    
  }

  try {
    const result = await getMaxAmount(Number(marker.id));
    console.log("Fetched max amount:", result);
    setAmount(result);
    if (result !== null) setMaxAmount(result);
  } catch (err) {
    
  }

  const description = marker.description || "";

  const autaMatch = description.match(/Auta:\s*(\d+)/);
  setCarCount(autaMatch ? parseInt(autaMatch[1], 10) : 0);

  const paramMatch = description.match(/Param:\s*(\d+)/);
  if (paramMatch) {
    const paramValue = parseInt(paramMatch[1], 10);
    setOtherCount(paramValue);
    setFoundAmount(paramValue);
    setEditStateofPlace(true);
  } else {
    setOtherCount(0);
  }
};

     useEffect(() => {
  const fetchInfo = async () => {
    if (foundId === null) return;

    try {
      const res = await getMoreInfo(Number(foundId));
      console.log("Fetched ID:", foundId);
      setSelectedWood(res.drevina);
      console.log("Sortiment" , res.sortiment);
      setSelectedAssortment(res.sortiment);
    
      console.log("Name (drevina):", res.drevina);
    } catch (err) {
     
    }
  };

  fetchInfo();
}, [foundId]); // závislost: spuštění při změně foundId
  // increate and decrease car or other count 
     //-------------------- "+" OR "-" COUNT OF ......   ---------------------

  const increaseCarCount = () => setCarCount(prevCount => prevCount + 1);
  const decreaseCarCount = () => setCarCount(prevCount => (prevCount > 0 ? prevCount - 1 : 0));

  const increaseOtherCount = () => setOtherCount(prevCount => prevCount + 1);
  const decreaseOtherCount = () => setOtherCount(prevCount => (prevCount > 0 ? prevCount - 1 : 0));



useEffect(() => {
  const fallbackId = "Smrk"; // Výchozí hodnota, pokud neexistuje žádný validní sortiment

  // Pokud existují dostupná data a nejsou prázdná
  if (adminFilteredData && adminFilteredData.length > 0) {
    // Hledá, jestli je aktuální vybraný sortiment (adminSelectedAssortment) platný
    const found = adminFilteredData.find(item => item.id === adminSelectedAssortment);
    
    if (found) {
      // Pokud je nalezen, nastav ho jako aktivní
      setSelectedSortiment(adminSelectedAssortment);
    } else {
      // Jinak fallback na výchozí hodnotu (např. Smrk)
      setSelectedSortiment(fallbackId);
    }
  } else {
    // Pokud neexistují žádná data, také fallback
    setSelectedSortiment(fallbackId);
  }
}, [adminSelectedAssortment, adminFilteredData]);


// -------------------- Získání maximálního množství dle ID (např. pro validaci nebo omezení vstupu) --------------------
const getMaxAmount = async (id) => {
  try {
    const response = await fetch(`${URL}/rest-api/moreInfo.php?amountPage=true&id=${id}`);
    const data = await response.json();

    // Vrací hodnotu amount, pokud je v odpovědi obsažena
    if (data.amount !== undefined) {
      return data.amount;
    } else {
      // Pokud není amount nalezen, loguj varování
      console.warn("⚠️ Amount not found in response:", data);
      return null;
    }
  } catch (err) {
    // Logování chyby, např. problém se síťovým připojením
    console.error("❌ Error fetching amount:", err);
    return null;
  }
};



// -------------------- Uložení upraveného počtu aut a sortimentu k existujícímu markeru --------------------
const saveCarCount = async () => {
  try {
    // JSON string s podrobnostmi o druhu a sortimentu
    const info = JSON.stringify({
      drevina: adminSelectedWood,
      sortiment: adminSelectedAssortment,
    });
    
    

    // Sestavení query parametrů pro API volání
    const params = new URLSearchParams({
      updatePlace: "1",
      code: Constants.expoConfig.extra.CODE,
      admin: Constants.expoConfig.extra.ADMIN_KEY_IMPORTANT,
      selector: Constants.expoConfig.extra.SELECTOR,
      cordinates: cordinates,
      cars: carCount.toString(),
      amount: amount.toString(),
      info, // serializovaný JSON string
    });

  

    // API volání pro uložení
    const response = await fetch(`${URL}rest-api/app?${params.toString()}&APICODE=${APICODE}`);
    const result = await response.json();

    // Pokud API hlásí úspěch
    if (result.Success || result.status === "success") {
      Alert.alert("Hotovo!", "Vaše data byla bezpečně uložena.");

      // Obnov data z API a aktualizuj stav
      const updatedPlaces = await selectPlaces();
      setMarkers(updatedPlaces);
      setLocations(updatedPlaces);
      refresh();
      setModalPage(1);
      closeMarkerModal?.(); // Zavři modal, pokud existuje
      resetUseStates();     // Resetuj výběrové hodnoty
    } else {
      // Pokud API vrátí chybu
      Alert.alert("❌ Chyba", result.Error || "Ukládání dat se nezdařilo. Prosím, zkuste to znovu později.");
    }

  } catch (err) {
    // Chyba při samotném odeslání dat
    Alert.alert("⚠️ Chyba", "Odeslání dat se nezdařilo. Prosím, zkuste to znovu.");
  }
};


  

      //-------------------- DELETE MARKER FROM THE MAP ---------------------

      // -------------------- SMAZÁNÍ MARKERU Z MAPY --------------------
const deleteMarker = () => {
  Alert.alert(
    "Opravdu chcete smazat?",
    "Tato akce je nevratná. Chcete opravdu smazat toto místo?",
    [
      {
        text: "Zrušit",
        style: "cancel"
      },
      {
        text: "Smazat",
        style: "destructive",
        onPress: async () => {

          // Parametry pro mazání místa
          const params = new URLSearchParams({
            deletePlace: "1",
            code: Constants.expoConfig.extra.CODE,
            admin: Constants.expoConfig.extra.ADMIN_KEY,
            selector: Constants.expoConfig.extra.SELECTOR,
            cordinates: cordinates,
          });

          try {
            // API požadavek na smazání místa
            const response = await fetch(`${URL}rest-api/app?${params.toString()}&APICODE=${APICODE}`);
            const data = await response.json();

            // Úspěšně smazáno
            if (data.arr === "Place deleted successfully.") {
              Alert.alert("✅ Úspěch", "Místo bylo úspěšně odstraněno.");

              // Obnova a zavření UI
              setEditStateofPlace(false);
              closeMarkerModal?.();
              clearInterval(intervalRef.current); // Pauzni refresh

              await fetchPlaces(); // Načti nová data

              resetUseStates(); // Resetuj vstupy

              // Znovu spusť interval refresh
              setTimeout(() => {
                intervalRef.current = setInterval(fetchPlaces, 1000);
              }, 1000);
            } else {
              // Pokud odpověď neobsahuje potvrzení o smazání
              Alert.alert(
                "Chyba",
                data.arr && data.arr.length > 0 ? data.arr : "Nepodařilo se smazat místo."
              );
            }
          } catch (error) {
            // Síťová nebo systémová chyba při odeslání
            Alert.alert("Chyba", "Požadavek na smazání selhal.");
          }
        }
      }
    ]
  );
};


// ♻️ Obnovení výchozích stavů po vytvoření/smazání/zrušení úprav
const resetUseStates = () => {
  setSelectedWood(1);             // Výchozí dřevina
  setSelectedAssortment(1);      // Výchozí sortiment
  setSelectedCarCount(1);        // Výchozí počet aut
};

// 💾 Uložení nového markeru (volá createPlace)
const saveNewMarker = () => {
  setBtnCreateNew(true);                   // Zamezení opětovnému kliknutí na tlačítko
  createPlace();                           // Vytvoření nového místa
  refresh();                               // Obnovení dat
  setModalPage(1);                         // Přepnutí zpět na první stránku modalu
  resetUseStates();                        // Obnovení výchozích stavů
};

// 🔨 Vytvoření místa na základě vyplněných údajů
const createPlace = () => {
  const user = Constants.expoConfig.extra.USER;
  const place = Constants.expoConfig.extra.PLACE;
  const code = Constants.expoConfig.extra.CODE;

  if (!title || !GPS) {
    Alert.alert("Error", "Marker name or GPS coordinates are missing."); // Validace
    return;
  }

  // Sestavení JSONu pro info o dřevině a sortimentu
  const selectedData = {
    drevina: adminSelectedWood,
    sortiment: selectedSortiment,
  };

  const valueJson = JSON.stringify(selectedData);

  // Sestavení URL s parametry
  const url = `${URL}rest-api/app?APICODE=${APICODE}&insert&tracks&user=${encodeURIComponent(user)}&placeID=${encodeURIComponent(place)}&mapCode=${encodeURIComponent(code)}&name=${encodeURIComponent(title)}&GPS=${encodeURIComponent(GPS)}&cars=${encodeURIComponent(carCount)}&value=${encodeURIComponent(valueJson)}&amount=${encodeURIComponent(amount)}&info=${encodeURIComponent(valueJson)}`;

  // Odeslání požadavku na backend
  fetch(url)
    .then(response => {
      if (!response.ok) throw new Error('Network response was not ok');
      return response.json();
    })
    .then(data => {
      if (data.success) {
        Alert.alert("Hotovo!", "Místo bylo úspěšně vytvořeno.");
      } else {
        Alert.alert("Error", data.error || "An error occurred.");
      }
    })
    .catch(error => {
      Alert.alert("Error", "Network error: " + error.message);
    });

  // Obnovení seznamu míst po vytvoření
  selectPlaces();
  setBtnCreateNew(false); // Reaktivace tlačítka
};

// ⛔️ Zavření formuláře/modalu s novým místem
const closeMarkerModal = () => {
  setSelectedMarker(null);         // Zrušení výběru markeru
  setBtnCreateNew(false);          // Skrytí tlačítka
  setEditStateofPlace(false);      // Ukončení editačního režimu
  setModalPage(1);                 // Návrat na první stránku modalu
};

// 🛠️ Přepnutí na formulář pro úpravu
const setEditMenuForm = () => {
  setEditForm(false);              // Skrytí úvodního formuláře
  setUsersInfo(true);              // Zobrazení editačních údajů
  setName("");                     // Reset názvu místa
};

// 🔁 Kombinovaná funkce pro zavření a unset
const handleClose = () => {
  closeMarkerModal();              // Zavření modalu
  unsetBtnContent();               // Reaktivace stavu pro tlačítka
};

// 💬 Otevření modalu s informacemi o aplikaci
const openAboutAppModal = () => setShowAboutApp(true);

// 👤 Otevření modalu s uživatelským profilem
const openProfileModal = () => setShowProfile(true);

// 👥 Otevření informací o uživateli
const openUsersInfo = () => setUsersInfo(true);

// ❌ Zavření modalu s aplikací
const closeAboutAppModal = () => {
  setShowAboutApp(false);
  setBtnCreateNew(!false); // Reaktivace tvorby nového
};

// 🔁 Pravidelný refresh dat každou sekundu při mountu komponenty
useEffect(() => {
  intervalRef.current = setInterval(fetchPlaces, 1000); // Volání každou sekundu

  return () => clearInterval(intervalRef.current); // Vyčištění při odchodu
}, []);

// 🧹 Zrušení úprav a reset všech stavů formuláře
const handleCancel = () => {
  setEditStateofPlace(false);     // Ukončení editace
  setSelectedMarker("val");       // Reset markeru
  setFormStep(1);                 // Začátek formuláře
  setSelectedOption('');          // Výběr dřeviny/sortimentu
  setFoundAmount(0);              // Vynulování množství
  setDate1(""); setDate2("");     // Datum od-do
  setTime1({ hours: 0, minutes: 0 });
  setTime2({ hours: 0, minutes: 0 });
  setName('');
  setSelectedMarker(false);       // Reset výběru
  resetUseStates();               // Obnovení výchozích hodnot
};

// ➕ Zobrazení formuláře pro přidání auta
const showAddCarF = () => {
  setAddCarForm(true);            // Zobrazení formu
};

// 🧱 Zapnutí editačního režimu pro konkrétní místo
const setEditedPlace = (place) => {
  setEditStateofPlace(true);      // Aktivuj režim úprav
  setSelectedMarker("");          // Reset výběru markeru
};

// 📆 Spojení datumu a času do jednoho objektu
function mergeDateAndTime(date, time) {
  const merged = new Date(date);
  merged.setHours(time.getHours());
  merged.setMinutes(time.getMinutes());
  merged.setSeconds(0);
  merged.setMilliseconds(0);
  return merged;
}

// ❌ Smazání uživatele
const deleteUser = async (id) => {
  const admin = Constants.expoConfig.extra.ADMIN_KEY;
  const inf = Constants.expoConfig.extra.INF;
  const code = Constants.expoConfig.extra.CODE;

  Alert.alert(
    "Smazání",
    `Chcete opravdu smazat uživatele?`,
    [
      { text: "Zavřít", style: "zavřít" },
      {
        text: "Smazat",
        style: "destructive",
        onPress: async () => {
          try {
            const url = `${URL}rest-api/app?APICODE=${APICODE}&deleteUser&code=${encodeURIComponent(code)}&delete=${encodeURIComponent(admin)}&inf-delete=${encodeURIComponent(inf)}&user-id=${id}`;

            const response = await fetch(url);
            const result = await response.json();

            if (result.message) {
              Alert.alert("Skvěle!", result.success || "Uživatel byl smazán.");
              await loadUsers(); // Obnovení seznamu
            } else if (result.warning) {
              Alert.alert("Upozornění", result.warning);
              await loadUsers();
            } else {
              Alert.alert("Chyba", result.error || "Neznámá chyba");
              await loadUsers();
            }
          } catch (error) {
            Alert.alert("Chyba", "Nastala chyba při mazání.");
            await loadUsers();
          }
        }
      }
    ]
  );
};

// 🛑 Vypnutí logiky pro zobrazení tlačítek
const unsetBtnContent = () => setBtnCreateNew(true);

const submitEditPlace = async () => {
  // Získání aktuálního data a času ve formátu YYYY-MM-DD a HH:MM
  const now = new Date();
  const todayDate = now.toISOString().split("T")[0];
  const nowTime = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;

  // Připrav data z formuláře do objektu
  const formData = {
    car: selectedOption,                   // Zvolený typ auta (např. SPZ nebo ID)
    tree: adminSelectedWood,              // Vybraná dřevina (např. smrk)
    sortiment: adminSelectedAssortment,   // Sortiment (např. 3m kulatina)
    amount,                               // Zadané množství
    name: userNameFromDB,                 // Jméno uživatele (z databáze)
    loading_date: todayDate,              // Datum nakládky
    loading_time: nowTime,                // Čas nakládky
    stacking_date: todayDate,             // Datum vykládky (použito stejné jako nakládka)
    stacking_time: nowTime,               // Čas vykládky
  };

  // ---------------- Validace vstupních dat ----------------
  if (
    !formData.car ||
    !formData.tree ||
    !formData.sortiment ||
    !formData.amount || formData.amount <= 0 ||
    !formData.name?.trim()
  ) {
    Alert.alert("Chyba", "Prosím, vyplňte všechna pole správně, aby bylo možné pokračovat.");
    return;
  }

  // ---------------- Příprava URL parametrů pro API ----------------
  const params = new URLSearchParams({
    editPlaceByWorker: "",                           // Spuštění editační logiky
    code: Constants.expoConfig.extra.CODE,
    adminKey: Constants.expoConfig.extra.ADMIN_KEY,
    selectKey: Constants.expoConfig.extra.SELECT_KEY,
    user: formData.name,
    amount: formData.amount.toString(),
    car: formData.car,
    tree: formData.tree.toString(),
    sortiment: formData.sortiment,
    cordinates: cordinates,
    loading_date: formData.loading_date,
    loading_time: formData.loading_time,
    stacking_date: formData.stacking_date,
    stacking_time: formData.stacking_time,
    max: maxAmount.toString(),                      // Maximální množství dostupné
  });

  // ---------------- Odeslání dat na server ----------------
  try {
    const response = await fetch(`${URL}rest-api/app?${params.toString()}&APICODE=${APICODE}`);
    const result = await response.json();

    // ✅ Úspěšně uloženo
    if (result.Success) {
      Alert.alert("Úspěch", "Skvěle! Záznam byl úspěšně uložen.");

      // Zavři modal, pokud existuje
      closeMarkerModal?.();

      // Vypni interval načítání dat
      if (intervalRef.current) clearInterval(intervalRef.current);

      // Resetuj formulář
      setFoundAmount("");
      setFoundName("");
      setFormStep(1);

      refresh();          // Obnov data
      resetUseStates();   // Resetuj výběry

      // Znovu spusť pravidelné načítání po krátké pauze
      setTimeout(() => {
        intervalRef.current = setInterval(fetchPlaces, 1000);
      }, 500);

    } else {
      // ❌ Chyba při uložení – odpověď od serveru
      Alert.alert("Chyba", result.Error || "Jejda, něco se pokazilo. Zkuste to prosím znovu.");
    }

  } catch (error) {
    // ❌ Síťová chyba nebo problém se serverem
    Alert.alert("Chyba", "Nepodařilo se odeslat data na server.");
  }
};


// -------------------- 🔄 Načtení záznamů při načtení komponenty --------------------
useEffect(() => {
  // Vytvoření URL pro načtení záznamů z backendu
  let url = `${URL}rest-api/app?selectRecords&APICODE=${APICODE}`;

  fetch(url)
    .then(response => {
      // Kontrola, zda odpověď od serveru je v pořádku
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json(); // Parsování JSONu
    })
    .then(data => {
      // 🔽 Zde bys měl zpracovat získaná data a uložit je do stavu
      // např. setRecords(data);
    })
    .catch(error => {
      // ⚠️ Zpracování chyby při načítání dat
      console.error("Chyba při načítání záznamů:", error);
    });
}, []); // ⏳ Spustí se pouze při mountu komponenty

// -------------------- ➕ Zobrazit více záznamů (po 10) --------------------
const handleShowMore = () => {
  setVisibleCount((prev) => prev + 10); // Zvětší počet viditelných záznamů o 10
};

// -------------------- 🔍 Zobrazit detailní informace o konkrétním záznamu --------------------
const handleDetail = (item) => {
  // Zobrazí Alert s formátovanými informacemi o vybraném záznamu
  Alert.alert("Detail záznamu", JSON.stringify(item, null, 2));
};

// -------------------- ⏱️ Automatické obnovení při odpočtu --------------------
useEffect(() => {
  // Pokud časovač dosáhne nuly, obnov data (volá např. selectPlaces nebo jinou funkci)
  if (secondsLeft === 0) {
    refresh(); // 🔄 Obnovení dat z backendu
    return;
  }

  // 🕒 Nastaví interval, který každou sekundu sníží secondsLeft o 1
  const interval = setInterval(() => {
    setSecondsLeft(prev => prev - 1);
  }, 1000);

  // 🧹 Vyčištění intervalu při odpojení efektu nebo aktualizaci
  return () => clearInterval(interval);
}, [secondsLeft]); // Tento useEffect běží vždy, když se změní hodnota `secondsLeft`

    //-------------------- HEADER ---------------------
  return (
  <View style={styles.container}>

    {/* 🟩 Hlavička aplikace */}
    <View style={styles.header}>
      <Text style={styles.headerText}>🌲 lesykrikava</Text>

      {/* 🔘 Tlačítka vpravo nahoře */}
      <View style={styles.headerButtons}>

        {/* Tlačítko "O aplikaci" se zobrazí jen pro ne-admin uživatele */}
        {!isAdmin && (
          <TouchableOpacity
            style={styles.aboutApp}
            onPress={openAboutAppModal}
            accessibilityLabel="O aplikaci"
          >
            <Text style={styles.buttonText}>O aplikaci</Text>
          </TouchableOpacity>
        )}

        {/* Tlačítko pro správu uživatelů (jen pro admina) */}
        {isAdmin && (
          <TouchableOpacity
            style={styles.button}
            onPress={openUsersInfo}
            accessibilityLabel="Správa uživatelů"
          >
            <Text style={styles.buttonText}>Správa uživatelů</Text>
          </TouchableOpacity>
        )}

        {/* Tlačítko pro přechod do profilu */}
        <TouchableOpacity
          style={styles.profileButton}
          onPress={openProfileModal}
          accessibilityLabel="Profil"
        >
          <Text style={styles.profileButtonText}>
            {isAdmin ? 'Váš profil' : 'Můj profil'}
          </Text>
        </TouchableOpacity>

      </View>
    </View>

    {/* 🗺️ Zobraz mapu */}
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: 49.70,
        longitude: 15.28,
        latitudeDelta: 0.004,
        longitudeDelta: 0.004,
      }}
      onPress={handleMapPress} // Kliknutí na mapu přidá nový bod (pokud admin)
    >

      {/* 📍 Stávající body z DB */}
      {locations.map((place, index) => (
        <Marker
          key={index}
          coordinate={{
            latitude: place.latitude,
            longitude: place.longitude,
          }}
          title={place.title}
          description={place.description}
          pinColor={colors[index] || 'green'}
          onPress={() => handleMarkerPress(place, index)}
        >
          <Callout>
            <View>
              <Text>{place.title}</Text>
              <Text>{place.description}</Text>
            </View>
          </Callout>
        </Marker>
      ))}

      {/* 📍 Nové nebo interaktivní body */}
      {markers.map((marker) => (
        <Marker
          key={marker.id || `${marker.latitude},${marker.longitude}`}
          coordinate={{
            latitude: marker.latitude,
            longitude: marker.longitude,
          }}
          title={marker.title}
          description={marker.description}
          onPress={() => handleMarkerPress(marker, marker.id)}
        />
      ))}

    </MapView>

    {/* 🛠️ MODAL pro správu bodu (pouze admin a pokud je marker vybrán) */}
{selectedMarker && isAdmin && (
  <Modal
    transparent
    animationType="slide"
    visible={selectedMarker !== null}
    onRequestClose={closeMarkerModal}
  >
    <View style={map.modalContainer}>
      <View style={map.modalContent}>

        {/* ❌ Zavření modalu */}
        <TouchableOpacity onPress={closeMarkerModal} style={map.floatingClose}>
          <Text style={map.closeIcon}>✕</Text>
        </TouchableOpacity>

        {/* ✏️ Tlačítko pro úpravu stavu */}
        {!btnCreateNew && (
          <TouchableOpacity
            onPress={() => setEditedPlace(map.modalTitle)}
            style={map.editStateButton}
          >
            <Text style={map.editStateText}>Upravit stav</Text>
          </TouchableOpacity>
        )}

        {/* 🔠 Název markeru */}
        <Text style={map.modalTitle}>{selectedMarker.title}</Text>

        {/* -------------------- 1️⃣ PRVNÍ STRÁNKA -------------------- */}
        {modalPage === 1 && (
          <>
            <View style={map.section}>
              {/* 🚚 Počet vozidel */}
              <View style={map.card}>
                <Text style={map.cardLabel}>Počet vozidel</Text>
                <TextInput
                  style={map.counter}
                  keyboardType="numeric"
                  value={carCount === 0 ? "" : String(carCount)}
                  onChangeText={(text) => {
                    if (text === "") {
                      setCarCount(0);
                      return;
                    }
                    if (/^\d+$/.test(text)) {
                      setCarCount(parseInt(text, 10));
                    }
                  }}
                />
                {carCount <= 0 && (
                  <Text style={{ color: 'red', marginTop: 5 }}>
                    Zadejte platný počet vozidel.
                  </Text>
                )}
              </View>

              {/* 🌳 Výběr dřeviny */}
              <View style={map.card}>
                <Text style={map.cardLabel}>Dřevina</Text>
                <View style={map.pickerContainer}>
                  <Picker
                    selectedValue={adminSelectedWood}
                    onValueChange={setSelectedWood}
                    style={carsStyles.st}
                  >
                    <Picker.Item label="Smrk" value={1} />
                    <Picker.Item label="Borovice" value={2} />
                    <Picker.Item label="Jedle" value={3} />
                    <Picker.Item label="Modřín" value={4} />
                  </Picker>
                </View>
              </View>
            </View>

            {/* ▶️ Pokračování na další stránku */}
            <View style={map.actions}>
              <TouchableOpacity
                onPress={() => {
                  if (!carCount || carCount <= 0) {
                    Alert.alert("Chyba", "Zadejte platný počet vozidel.");
                    return;
                  }
                  setModalPage(2);
                }}
                style={map.primaryBtn}
              >
                <Text style={map.primaryText}>Pokračovat</Text>
              </TouchableOpacity>
            </View>
          </>
        )}

        {/* -------------------- 2️⃣ DRUHÁ STRÁNKA -------------------- */}
        {modalPage === 2 && (
          <>
            <View style={map.section}>
              {/* 📦 Výběr sortimentu */}
              <View style={map.card}>
                <Text style={map.cardLabel}>Sortiment</Text>
                <Picker
                  selectedValue={adminSelectedAssortment}
                  onValueChange={setSelectedAssortment}
                  style={map.st}
                >
                  {Array.isArray(adminFilteredData) &&
                  adminFilteredData.filter(item => item?.id !== undefined && item?.name !== undefined).length > 0 ? (
                    adminFilteredData.map(item => (
                      <Picker.Item key={item.id} label={item.name} value={item.id} />
                    ))
                  ) : (
                    <>
                      <Picker.Item label="Smrk" value={1} />
                      <Picker.Item label="Borovice" value={2} />
                      <Picker.Item label="Jedle" value={3} />
                      <Picker.Item label="Modřín" value={4} />
                    </>
                  )}
                </Picker>
              </View>

              {/* ⚖️ Množství */}
              <View style={map.card}>
                <Text style={map.cardLabel}>Množství</Text>
                <TextInput
                  style={map.countfer}
                  keyboardType="numeric"
                  value={amount !== null && amount !== undefined ? amount.toString() : ""}
                  onChangeText={(text) => {
                    const parsed = parseInt(text, 10);
                    if (!isNaN(parsed) && parsed >= 0) {
                      setAmount(parsed);
                    } else {
                      setAmount(0);
                    }
                  }}
                />
                {(!amount || amount <= 0) && (
                  <Text style={{ color: 'red', marginTop: 5 }}>
                    Prosím zadejte platné množství.
                  </Text>
                )}
              </View>
            </View>

            {/* ✅ Akční tlačítka */}
            <View style={map.actions}>
              <TouchableOpacity
                onPress={() => {
                  if (!adminSelectedAssortment || !amount || amount <= 0) {
                    Alert.alert("Chyba", "Vyplňte prosím správně všechna pole.");
                    return;
                  }
                  btnCreateNew ? saveNewMarker() : saveCarCount();
                }}
                style={map.primaryBtn}
              >
                <Text style={map.primaryText}>
                  {btnCreateNew ? 'Vytvořit' : 'Uložit'}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={deleteMarker} style={map.deleteBtn}>
                <Text style={map.deleteText}>Smazat</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => setModalPage(1)}
                style={map.secondaryBtn}
              >
                <Text style={map.secondaryText}>Zpět</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </View>
    </View>
  </Modal>
)}

  {/* 
  -------------------- MANAGE CAR FORM --------------------
  Zobrazuje modal s přehledem všech vozidel (aut),
  umožňuje jejich úpravu nebo smazání
*/}
{manageCar && (
  <Modal
    transparent
    animationType="fade"
    visible={manageCar}
    onRequestClose={() => setManageCar(false)} // Zavře modal, pokud uživatel klikne mimo
  >
    <View style={carsStyles.overlay}>
      <View style={carsStyles.container}>
        {/* Hlavička */}
        <Text style={carsStyles.header}>⚒️  Správa aut</Text>

        {/* Přehled aut ve scrollovací tabulce */}
        <ScrollView style={carsStyles.scrollView}>

          {/* Hlavička tabulky */}
          <View style={carsStyles.tableHeader}>
            <Text style={carsStyles.tableHeaderCell}>Název</Text>
            <Text style={carsStyles.tableHeaderCell}>SPZ</Text>
            <Text style={carsStyles.tableHeaderCell}>Akce</Text>
          </View>

          {/* Výpis všech vozidel (carOptions) */}
          {carOptions.map((car, index) => {
            // Rozdělení názvu a SPZ (např. "Vůz 1?SPZABC123")
            const [name, apz] = car.label.split('?');

            return (
              <View key={index} style={carsStyles.tableRow}>
                {/* Název vozu */}
                <Text style={carsStyles.cell}>{name}</Text>

                {/* SPZ bez prefixu "SPZ" */}
                <Text style={carsStyles.cell}>{apz.replace("SPZ", "")}</Text>

                {/* Akce: Edit a Delete */}
                <View style={carsStyles.actions}>
                  {/* ✏️ Editace vozu */}
                  <TouchableOpacity
                    style={[carsStyles.actionBtn, carsStyles.editBtn]}
                    onPress={() => handleEdit(car)}
                  >
                    <Text style={carsStyles.btnText}>✎</Text>
                  </TouchableOpacity>

                  {/* 🗑️ Smazání vozu */}
                  <TouchableOpacity
                    style={[carsStyles.actionBtn, carsStyles.deleteBtn]}
                    onPress={() => handleDelete(car)}
                  >
                    <Text style={carsStyles.btnText}>🗑</Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
          })}
        </ScrollView>

        {/* Spodní tlačítka pro přidání nebo zavření */}
        <View style={carsStyles.footerButtons}>
          <TouchableOpacity onPress={showAddCarF} style={carsStyles.addNewCarBtn}>
            <Text style={carsStyles.btnText}>+ Přidat nový vůz</Text>
          </TouchableOpacity>

          <TouchableOpacity style={carsStyles.closeBtn} onPress={() => setManageCar(false)}>
            <Text style={carsStyles.btnText}>Zavřít</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  </Modal>
)}

{/* 
  -------------------- ADD NEW CAR FORM --------------------
  Modal s formulářem pro přidání nového vozidla do seznamu
*/}
{showAddCarForm && (
  <Modal
    transparent
    animationType="fade"
    visible
    onRequestClose={() => setAddCarForm(false)} // Zavření modalu
  >
    <View style={carsStyles.overlay}>
      <View style={carsStyles.container}>
        {/* Hlavička */}
        <Text style={carsStyles.header}>➕ Přidat nové auto</Text>

        {/* Vstupní pole pro název auta */}
        <View style={carsStyles.formGroup}>
          <Text style={carsStyles.label}>Název auta</Text>
          <TextInput
            style={carsStyles.input}
            placeholder="Zadejte název auta"
            placeholderTextColor="#999"
            onChangeText={setNewAddedCarName}
          />
        </View>

        {/* Vstupní pole pro SPZ */}
        <View style={carsStyles.formGroup}>
          <Text style={carsStyles.label}>SPZ</Text>
          <TextInput
            style={carsStyles.input}
            placeholder="Zadejte SPZ"
            placeholderTextColor="#999"
            onChangeText={setNewAddedSPZ}
          />
        </View>

        {/* Spodní tlačítka: přidat nebo zrušit */}
        <View style={carsStyles.footerButtonsEdit}>
          {/* Potvrzení přidání vozu */}
          <TouchableOpacity style={carsStyles.fullWidthBtnEditForm} onPress={handleAddCar}>
            <Text style={carsStyles.footerText}>Přidat</Text>
          </TouchableOpacity>

          {/* Zrušení akce */}
          <TouchableOpacity
            style={[carsStyles.fullWidthBtnEditForm, { backgroundColor: "#F44336" }]}
            onPress={() => setAddCarForm(false)}
          >
            <Text style={[carsStyles.footerText, { color: "#fff" }]}>Zrušit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  </Modal>
)}

{/* -------------------- MODAL: Úprava záznamu -------------------- */}
{editStateOfPlace && (
  <View style={modernStyles.overlay}>
    <View style={modernStyles.container}>

      {/* Tlačítko pro zavření modalu */}
      <TouchableOpacity style={modernStyles.closeButton} onPress={handleCancel}>
        <Text style={modernStyles.closeButtonText}>✕</Text>
      </TouchableOpacity>

      {/* Zobrazení jména místa nebo osoby */}
      <Text style={modernStyles.title}>{foundName}</Text>

      {/* Indikátor postupu (3 kroky) */}
      <View style={modernStyles.stepIndicator}>
        <View style={[modernStyles.stepDot, formStep === 1 && modernStyles.activeDot]} />
        <View style={[modernStyles.stepDot, formStep === 2 && modernStyles.activeDot]} />
        <View style={[modernStyles.stepDot, formStep === 3 && modernStyles.activeDot]} />
      </View>

      {/* Obsah jednotlivých kroků formuláře s animací */}
      <Animated.View style={{ opacity: fadeAnim }}>

        {/* ---------- KROK 1: Výběr auta + dřeviny ---------- */}
        {formStep === 1 ? (
          <>
            <Text style={modernStyles.label}>Vyberte auto</Text>
            <View style={modernStyles.input}>
              <Picker
                selectedValue={selectedOption}
                onValueChange={(value) => {
                  setSelectedOption(value);
                  setTouchedStep1(true);
                }}
                style={{ color: selectedOption ? '#111' : '#aaa' }}
              >
                <Picker.Item label="Zvolte auto" value="" />
                {carOptions.map((car, i) => {
                  const [name, spz] = car.label.split("?");
                  return (
                    <Picker.Item
                      key={i}
                      label={`${name} - ${spz?.replace("SPZ", "")}`}
                      value={car.value}
                    />
                  );
                })}
              </Picker>
            </View>

            {/* Výběr dřeviny */}
            <Text style={modernStyles.label}>Dřevina</Text>
            <View style={modernStyles.pickerWrapper}>
              <Picker
                selectedValue={adminSelectedWood}
                onValueChange={setSelectedWood}
                style={carsStyles.st}
              >
                <Picker.Item label="Smrk" value={1} />
                <Picker.Item label="Borovice" value={2} />
                <Picker.Item label="Jedle" value={3} />
                <Picker.Item label="Modřín" value={4} />
              </Picker>
            </View>

            {/* Validace vstupů */}
            {touchedStep1 && !selectedOption && (
              <Text style={{ color: 'red', marginTop: 5 }}>Prosím, vyberte auto.</Text>
            )}
            {touchedStep1 && foundAmount === 0 && (
              <Text style={{ color: 'red', marginTop: 5 }}>Není dostupné množství.</Text>
            )}

            {/* Tlačítko pro přechod na další krok */}
            <TouchableOpacity
              style={[
                modernStyles.st,
                (!selectedOption || foundAmount === 0) && modernStyles.bf
              ]}
              onPress={() => {
                setTouchedStep1(true);
                if (!selectedOption || foundAmount === 0) return;
                fadeAnim.setValue(0);
                setFormStep(2);
                setTouchedStep2(false);
              }}
              disabled={!selectedOption || foundAmount === 0}
            >
              <Text style={modernStyles.stForeColor}>Pokračovat</Text>
            </TouchableOpacity>
          </>
        
        /* ---------- KROK 2: Sortiment + množství ---------- */
        ) : formStep === 2 ? (
          <>
            <Text style={modernStyles.label}>Sortiment</Text>
            <View style={modernStyles.pickerWrapperSortiment}>
              <Picker
                selectedValue={selectedSortiment}
                onValueChange={setSelectedSortiment}
                style={map.st}
              >
                {/* Dynamický výběr sortimentu nebo fallback */}
                {adminFilteredData && adminFilteredData.length > 0 &&
                adminFilteredData.some(item => item.id === selectedSortiment) ? (
                  adminFilteredData.map(item => (
                    <Picker.Item key={item.id} label={item.name} value={item.id} />
                  ))
                ) : (
                  <>
                    <Picker.Item label="Buk" value="buk" />
                    <Picker.Item label="Dub" value="dub" />
                    <Picker.Item label="Smrk" value="smrk" />
                    <Picker.Item label="Borovice" value="borovice" />
                    <Picker.Item label="Vlastní" value="custom" />
                  </>
                )}
              </Picker>
            </View>

            {/* Množství */}
            <Text style={modernStyles.label}>Množství</Text>
            <TextInput
              style={modernStyles.amountInput}
              value={amount.toString()}
              onChangeText={(text) => {
                const parsed = parseInt(text, 10);
                if (!isNaN(parsed) && text.trim() !== "") {
                  if (parsed <= maxAmount && parsed >= 0) {
                    setAmount(parsed);
                  } else if (parsed > maxAmount) {
                    setAmount(maxAmount);
                    Alert.alert("Limit překročen", `Maximální množství je ${maxAmount}.`);
                  }
                } else {
                  setAmount(0);
                }
              }}
              placeholder="Zadejte množství"
              keyboardType="numeric"
              onBlur={() => setTouchedStep2(true)}
            />

            {/* Validace vstupů */}
            {touchedStep2 && !selectedSortiment && (
              <Text style={{ color: 'red', marginTop: 5 }}>Prosím, vyberte sortiment.</Text>
            )}
            {touchedStep2 && (!amount || amount <= 0) && (
              <Text style={{ color: 'red', marginTop: 5 }}>Prosím, zadejte platné množství.</Text>
            )}

            {/* Ovládací tlačítka (Zpět / Další) */}
            <View style={modernStyles.stepControls}>
              <TouchableOpacity
                style={[modernStyles.button, modernStyles.buttonSecondary]}
                onPress={() => {
                  setFormStep(1);
                  setTouchedStep2(false);
                }}
              >
                <Text style={modernStyles.buttonText}>Předchozí</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[modernStyles.button, modernStyles.buttonPrimary]}
                onPress={() => {
                  setTouchedStep2(true);
                  if (!selectedSortiment || !amount || amount <= 0) return;
                  goToNextStep();
                }}
              >
                <Text style={modernStyles.buttonText}>Další</Text>
              </TouchableOpacity>
            </View>
          </>
        
        /* ---------- KROK 3: Čas, jméno, potvrzení ---------- */
        ) : formStep === 3 ? (
          <>
            {/* Datum a čas nakládání */}
            <Text style={modernStyles.label}>Datum a čas nakládání</Text>
            <View style={modernStyles.row}>
              <Text style={modernStyles.inputText}>
                {new Date().toLocaleDateString("cs-CZ") + " "}
                {`${String(new Date().getHours()).padStart(2, '0')}:${String(new Date().getMinutes()).padStart(2, '0')}`}
              </Text>
            </View>

            {/* Datum a čas skládání */}
            <Text style={modernStyles.label}>Datum a čas skládání</Text>
            <View style={modernStyles.row}>
              <Text style={modernStyles.inputText}>
                {new Date().toLocaleDateString("cs-CZ") + " "}
                {`${String(new Date().getHours()).padStart(2, '0')}:${String(new Date().getMinutes()).padStart(2, '0')}`}
              </Text>
            </View>

            {/* Zobrazení jména uživatele (readonly) */}
            <Text style={modernStyles.label}>Vaše jméno</Text>
            <TextInput
              placeholder="Např. Jan Novák"
              value={userNameFromDB}
              placeholderTextColor="#999"
              style={modernStyles.input}
              editable={false}
            />

            {/* Ovládací tlačítka */}
            <View style={modernStyles.stepControls}>
              <TouchableOpacity
                style={[modernStyles.button, modernStyles.buttonSecondary]}
                onPress={() => setFormStep(2)}
              >
                <Text style={modernStyles.buttonText}>Zpět</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={modernStyles.button}
                onPress={submitEditPlace} // Odeslání upravených dat
              >
                <Text style={modernStyles.btnSubmit}>Potvrdit</Text>
              </TouchableOpacity>
            </View>
          </>
        ) : null}
      </Animated.View>

      {/* -------------------- DATUMY A ČASY -------------------- */}
      {showDatePicker1 && (
        <View style={styles.calendarOverlay}>
          <Calendar
            onDayPress={(day) => {
              const selected = new Date(day.dateString);
              setDate1(selected);
              setShowDatePicker1(false);
            }}
            markedDates={
              date1
                ? {
                    [date1.toISOString().split('T')[0]]: {
                      selected: true,
                      selectedColor: '#2E7D32',
                    },
                  }
                : {}
            }
            theme={{
              selectedDayBackgroundColor: '#2E7D32',
              todayTextColor: '#2E7D32',
              arrowColor: '#2E7D32',
            }}
          />
        </View>
      )}

      {showTimePicker1 && (
        <TimerPickerModal
          visible={showTimePicker1}
          onConfirm={({ hours, minutes }) => {
            setTime1({ hours, minutes });
            setShowTimePicker1(false);
          }}
          initialHours={time1.hours}
          initialMinutes={time1.minutes}
          hideSeconds
          theme="light"
          hideCancelButton
          confirmButtonText="Uložit"
        />
      )}

      {showDatePicker2 && (
        <View style={styles.calendarOverlay}>
          <Calendar
            onDayPress={(day) => {
              const selected = new Date(day.dateString);
              setDate2(selected);
              setTempDate2(selected);
              setShowDatePicker2(false);
            }}
            markedDates={{
              [tempDate2.toISOString().split('T')[0]]: {
                selected: true,
                selectedColor: '#2E7D32',
              },
            }}
            theme={{
              selectedDayTextColor: '#fff',
              todayTextColor: '#2E7D32',
              arrowColor: '#2E7D32',
            }}
          />
        </View>
      )}

      {showTimePicker2 && (
        <TimerPickerModal
          visible={showTimePicker2}
          onConfirm={({ hours, minutes }) => {
            setTime2({ hours, minutes });
            setShowTimePicker2(false);
          }}
          initialHours={time2.hours}
          initialMinutes={time2.minutes}
          hideSeconds
          theme="light"
          hideCancelButton
          confirmButtonText="Uložit"
        />
      )}
    </View>
  </View>
)}




{editCar && (
  <Modal
    transparent
    animationType="fade"
    visible={editCar}
    onRequestClose={() => setEditCar(false)}
  >
    <View style={carsStyles.overlay}>
      <View style={carsStyles.container}>

        {/* Removed the top-right close button */}

        <Text style={carsStyles.header}>✏️  Editace auta</Text>

        {/* Form Inputs */}
        <View style={carsStyles.formGroup}>
          <Text style={carsStyles.label}>Název auta</Text>
          <TextInput
            style={carsStyles.input}
            value={newLabel}
            onChangeText={setNewLabel}
            placeholder="Zadejte název auta"
            placeholderTextColor="#888"
          />
        </View>

        <View style={carsStyles.formGroup}>
          <Text style={carsStyles.label}>SPZ</Text>
          <TextInput
            style={carsStyles.input}
            value={newValue}
            onChangeText={setNewValue}
            placeholder="Zadejte SPZ"
            placeholderTextColor="#888"
          />
        </View>

        {/* Buttons */}
        <View style={carsStyles.footerButtonsEdit}>

         

          <TouchableOpacity
            onPress={updateEditedCar}
            style={carsStyles.fullWidthBtnEditForm}
          >
            <Text style={carsStyles.footerText}>Potvrdit změnu</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setEditCar(false)}
            style={[carsStyles.fullWidthBtnEditForm, { backgroundColor: "#F44336"}]}
          >
            <Text style={[carsStyles.footerText, { color: '#fff' }]}>Zavřít</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  </Modal>
)}

{/* //-------------------- USER LIST MODAL --------------------- */}
{usersInfo && (
  <Modal
    transparent
    animationType="fade"
    visible={usersInfo}
    onRequestClose={() => setUsersInfo(false)}
  >
    <View style={stylesUsers.overlay}>
      <View style={stylesUsers.container}>
        <Text style={stylesUsers.header}>👥 Seznam uživatelů</Text>

        <ScrollView style={stylesUsers.scrollView}>
          {/* Table Header */}
          <View style={stylesUsers.tableHeader}>
            <Text style={stylesUsers.tableHeaderCell}>Jméno</Text>
            <Text style={stylesUsers.tableHeaderCell}>Auta</Text>
            <Text style={stylesUsers.tableHeaderCell}>Akce</Text>
          </View>

          {/* User Rows */}
          {usersData.map((user, index) => {
            let autaText = '';
            try {
              const parsed = JSON.parse(user.auta);
              autaText = parsed.label ? parsed.label.split('?')[0].trim() : "Žádné auto";
              if (autaText.includes("{")) autaText = "Žádné auto";
            } catch {
              autaText = user.auta;
            }

            return (
              <View key={index} style={stylesUsers.cardRow}>
                <Text style={stylesUsers.cell}>{user.jmeno}</Text>
                <Text style={stylesUsers.cell}>{autaText}</Text>
                <View style={stylesUsers.actions}>
                  <TouchableOpacity
                    style={[stylesUsers.actionBtn, stylesUsers.editBtn]}
                    onPress={() => editUser(user)}
                  >
                    <Text style={stylesUsers.btnText}>✏️</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[stylesUsers.actionBtn, stylesUsers.deleteBtn]}
                    onPress={() => deleteUser(user.id)}
                  >
                    <Text style={stylesUsers.btnText}>🗑️</Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
          })}
        </ScrollView>

        <TouchableOpacity onPress={() => setUsersInfo(false)} style={stylesUsers.closeBtn}>
          <Text style={stylesUsers.closeBtnText}>Zavřít</Text>
        </TouchableOpacity>
      </View>
    </View>
  </Modal>
)}



{/*     //-------------------- EDIT THE ADMIN PROFILE  --------------------- */}
{isAdmin && editProfile && (
  <Modal visible transparent animationType="slide" onRequestClose={() => setEditProfile(false)}>
    <View style={stylesForm.overlay}>
      <View style={stylesForm.container}>
        <Text style={stylesForm.title}> Upravit profil</Text>

        <View style={stylesForm.formGroup}>
          <Text style={stylesForm.label}> Jméno</Text>
          <TextInput
            style={stylesForm.input}
            placeholder="Zadejte nové jméno"
            value={name}
            onChangeText={setName}
          />
        </View>

        <View style={stylesForm.formGroup}>
          <Text style={stylesForm.label}> Nové heslo (nepovinné)</Text>
          <TextInput
            style={stylesForm.input}
            placeholder="Zadejte nové heslo"
            secureTextEntry
            value={newPassword}
            onChangeText={setNewPassword}
          />
        </View>

        <View style={stylesForm.buttonRow}>
          <TouchableOpacity style={stylesForm.cancelButton} onPress={() => setEditProfile(false)}>
            <Text style={stylesForm.cancelText}>Zrušit</Text>
          </TouchableOpacity>
          <TouchableOpacity style={stylesForm.saveButton} onPress={handleSaveProfile}>
            <Text style={stylesForm.saveText}>Uložit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  </Modal>
)}

{/* získat udaje z objektu z toho vytvořit option kterou se zobrazí na prvním místě a pod nim ty ostatní auta  */}

{editMenuForm && (
  <Modal
    visible
    transparent
    animationType="slide"
    onRequestClose={() => setEditMenuForm(false)}
  >
    <View style={stylesForm.overlay}>
      <View style={stylesForm.container}>
        <Text style={stylesForm.title}>🛠️ Upravit uživatele</Text>

        {/* Name Input */}
        <View style={stylesForm.formGroup}>
          <Text style={stylesForm.label}>Jméno</Text>
          <TextInput
            style={stylesForm.input}
            placeholder="Zadejte jméno"
            value={name}
            onChangeText={setName}
            placeholderTextColor="#aaa"
          />
        </View>

        {/* Car Picker */}
        <View style={stylesForm.formGroup}>
          <Text style={stylesForm.label}>Auta</Text>
          <View style={stylesForm.pickerWrapper}>
            <Picker
              selectedValue={selectedPickedCar}
              onValueChange={(itemValue) => setSelectedPickedCar(itemValue)}
              style={stylesForm.picker}
            >
              <Picker.Item label="Žádné" value="Žádné" />
              {carOptions.map((car, index) => {
                const [carName, licensePlate] = car.label.split('?');
                return (
                  <Picker.Item
                    key={index}
                    label={`${carName.trim()} - ${licensePlate?.trim() || ''}`}
                    value={car.value}
                  />
                );
              })}
            </Picker>
          </View>
        </View>

        {/* Password Field */}
        <View style={stylesForm.formGroup}>
          <Text style={stylesForm.label}>Nové heslo (nepovinné)</Text>
          <TextInput
            style={stylesForm.input}
            placeholder="Nové heslo"
            value={newPassword}
            onChangeText={setNewPassword}
            placeholderTextColor="#aaa"
            editable={false}
          />
          <TouchableOpacity onPress={generatePassword} style={stylesForm.generateBtn}>
            <Text style={stylesForm.generateBtnText}>Generovat nové heslo</Text>
          </TouchableOpacity>
        </View>

        {/* Buttons */}
        <View style={stylesForm.buttonRow}>
          <TouchableOpacity style={stylesForm.cancelButton} onPress={() => setEditMenuForm(false)}>
            <Text style={stylesForm.cancelText}>Zrušit</Text>
          </TouchableOpacity>
          <TouchableOpacity style={stylesForm.saveButton} onPress={handleSaveUser}>
            <Text style={stylesForm.saveText}>Uložit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  </Modal>
)}

  
{/*     //-------------------- ABOUT APP FORM  --------------------- */}
  {showAboutApp && (
  <Modal
    transparent={true}
    animationType="fade"
    visible={showAboutApp}
    onRequestClose={closeAboutAppModal}
  >
   <View style={aboutStyles.backdrop}>
  <View style={aboutStyles.modalBox}>
    <Text style={aboutStyles.title}>ℹ️ O aplikaci</Text>

    <Text style={aboutStyles.description}>
      Informační systém aplikace <Text style={aboutStyles.bold}>Lesy Křikava</Text> pro uživatele.
    </Text>

    <Text style={aboutStyles.label}>
      Webové stránka:{' '}
      <Text style={aboutStyles.link} onPress={() => Linking.openURL('https://lesykrikava.cz/')}>
        lesykrikava.cz
      </Text>
    </Text>

    <TouchableOpacity onPress={closeAboutAppModal} style={aboutStyles.closeButton}>
      <Text style={aboutStyles.closeText}>Zavřít</Text>
    </TouchableOpacity>
  </View>
</View>
  </Modal>
)}




{editCarList && carInfo != "" && (
  <Modal transparent animationType="fade" visible onRequestClose={() => setEditCarList(false)}>
    <View style={carsStyles.overlay}>
      <View style={carsStyles.container}>
        <Text style={carsStyles.header}>✏️ Upravit auto</Text>

        <View style={carsStyles.formGroup}>
          <Text style={carsStyles.label}>🚗 Název auta</Text>
          <TextInput
  style={carsStyles.input}
  value={carInfo.carName}
  onChangeText={(text) =>
    setCarInfo((prev) => ({ ...prev, carName: text }))
  }
/>

        </View>
        <Text style={carsStyles.label}>🔢 SPZ</Text> 
        <View style={carsStyles.formGroup}>
        <TextInput
  style={carsStyles.input}
  value={carInfo.spz}
  onChangeText={(text) =>
    setCarInfo((prev) => ({ ...prev, spz: text }))
  }
/>
        </View>
        <View style={carsStyles.buttonRow}>
          <TouchableOpacity style={carsStyles.cancelButton} onPress={() => setEditCarList(false)}>
            <Text style={carsStyles.cancelText}>Zrušit</Text>
          </TouchableOpacity>
          <TouchableOpacity style={carsStyles.saveButton} >
            <Text style={carsStyles.saveText}>Uložit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  </Modal>
)}




{/*     //-------------------- PROFILE ADMIN || USER  --------------------- */}
{/* //-------------------- PROFILE ADMIN || USER --------------------- */}
{showProfile && (
  <Modal
    transparent
    animationType="fade"
    visible={showProfile}
    onRequestClose={handleCloseModal}
  >
    <View style={personProfile.overlay}>
      <View style={personProfile.container}>
        <TouchableOpacity style={personProfile.closeBtn} onPress={handleCloseModal}>
          <Text style={personProfile.closeText}>✕</Text>
        </TouchableOpacity>

        <Text style={personProfile.title}>⚒️  Váš osobní profil</Text>

        {isAdmin ? (
          <>
            <Text style={personProfile.subtitle}>Vytvořit nového uživatele</Text>
            <ScrollView contentContainerStyle={personProfile.scrollArea}>
              {newUsers.map((user, index) => (
                <View key={index} style={personProfile.card}>
                  <TextInput
                    style={personProfile.input}
                    placeholder="Jméno"
                    value={newUserName}
                    onChangeText={(text) => handleUserInputChange(index, 'name', text)}
                  />
                  <TextInput
                    style={personProfile.input}
                    placeholder="Heslo"
                    value={newUserPassword}
                    
                  />
                  <Picker
                    selectedValue={newUserName}
                    onValueChange={setAddedUserCar}
                    style={personProfile.select}
                  >
                    <Picker.Item label="Vyberte auto – nepovinné" value="" />
                    {carOptions.map((car, idx) => (
                      <Picker.Item
                        key={idx}
                        label={car.label.replace("?", "-")}
                        value={car.value}
                      />
                    ))}
                  </Picker>

                  <TouchableOpacity onPress={generatePassword} style={personProfile.linkBtn}>
                    <Text style={personProfile.linkText}>🔐 Vygenerovat heslo</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={setManageCarTrue} style={personProfile.linkBtn}>
                    <Text style={personProfile.linkText}>🚘 Správa vozidel</Text>
                  </TouchableOpacity>

                   {/*  <TouchableOpacity onPress={setRecordTrue} style={personProfile.linkBtn}>
                    <Text style={personProfile.linkText}>✏️  Zobrazit záznamy</Text>
                  </TouchableOpacity> */}
                </View>
              ))}
            </ScrollView>

            <View style={personProfile.btnRow}>
              <TouchableOpacity style={personProfile.primaryBtn} onPress={handleCreateUser}>
                <Text style={personProfile.btnText}>Vytvořit</Text>
              </TouchableOpacity>
              <TouchableOpacity style={personProfile.secondaryBtn} onPress={handleCreateUsers}>
                <Text style={personProfile.secondaryBtnText}>Přidat dalšího</Text>
              </TouchableOpacity>
            </View>
          </>
        ) : (
          <ScrollView contentContainerStyle={personProfile.scrollArea}>
            <View style={personProfile.card}>
              <Text style={personProfile.label}>Vaše jméno:</Text>
              <Text style={personProfile.value}>{userNameFromDB}</Text>
            </View>

            <View style={personProfile.card}>
              <Text style={personProfile.label}>Datum:</Text>
              <Text style={personProfile.value}>
                {new Date().toLocaleDateString('cs-CZ', {
                  weekday: 'long',
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </Text>
            
            </View>
            <Text style={personProfile.greeting}>Každý krok Vás posouvá dál.</Text>


          </ScrollView>
        )}
      </View>
    </View>
  </Modal>
)}

 
    </View>
  );
};
export default HomeScreen;