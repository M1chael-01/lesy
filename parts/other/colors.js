import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
    padding: 16,
    flex: 1,
    backgroundColor: '#f0f4f7',
  },
  item: {
    backgroundColor: '#fff',
    padding: 16,
    marginVertical: 8,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  text: {
    fontSize: 16,
    marginBottom: 4,
  },
  bold: {
    fontWeight: 'bold',
  },
  button: {
    marginTop: 8,
    backgroundColor: '#2e86de',
    padding: 10,
    borderRadius: 6,
    alignItems: 'center',
  },
  loadMoreBtn: {
    backgroundColor: '#444',
    padding: 12,
    marginTop: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',

  },
  picker: {
    titleText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#2E7D32',
      textAlign: 'center',
      marginBottom: 8,
    },
    confirmButton: {
      backgroundColor: '#2E7D32',
      padding: 12,
      borderRadius: 8,
      marginTop: 12,
    },
    confirmButtonText: {
      color: '#fff',
      fontWeight: '600',
      textAlign: 'center',
    },
    cancelButton: {
      backgroundColor: '#ccc',
      padding: 12,
      borderRadius: 8,
      marginTop: 8,
    },
    cancelButtonText: {
      color: '#333',
      fontWeight: '500',
      textAlign: 'center',
    },
  },
calendarOverlay: {
    position: 'absolute',
    top: '25%', // výš než klasicky (lze doladit podle potřeby)
    left: 20,
    right: 20,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    zIndex: 999, // zajistí, že bude nad ostatními komponentami
  },
  
    container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },

  header: {
    paddingTop: 35,
    paddingBottom: 20,
    paddingHorizontal: 16,
    backgroundColor: '#fafafa',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
    alignItems: 'center',
  },

  headerText: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1e1e1e',
    marginBottom: 22,
    textAlign: 'center',
    letterSpacing: 0.5,
  },

  headerButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: 12,
    marginTop:"-5"
  },

  button: {
    backgroundColor: "#008033",
    paddingVertical: 8,
   
    paddingHorizontal: 20,
    borderRadius: 10,
  },

  aboutApp:{
      backgroundColor: "#008033",
    paddingVertical: 8,
    
    paddingHorizontal: 40,
    borderRadius: 10,
  },


  buttonText: {
    fontSize: 15,
    color: '#1f3b58',
    fontWeight: '300',
  },

  profileButton: {
    backgroundColor: '#474d57',
    paddingVertical: 8,
    paddingHorizontal:40,
    borderRadius: 10,
  },

  profileButtonText: {
    fontSize: 15,
    color: '#ffffff',
    fontWeight: '600',
  },
  
  map: {
    width: '100%',
    height: '90%',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 30,
    borderRadius: 12,
    width: '85%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 10,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#2C3E50',
    
  },
  modalSubtitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#7F8C8D',
    marginBottom: 10,
  },
  modalText: {
    fontSize: 16,
    color: '#2C3E50',
    marginBottom: 20,
    textAlign: 'center',
    
  },
  card: {
    width: '100%',
    padding: 15,
    marginBottom: 20,
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
    shadowColor: '#BDC3C7',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 6,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#34495E',
    marginBottom: 10,
  },
  countControl: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  countButton: {
    backgroundColor: '#388E3C',
    paddingVertical: 10, // Reduced padding for smaller button
    paddingHorizontal: 7, // Adjusted padding for smaller button
    borderRadius: 5,
    alignItems: 'center',
  },
  countButtonText: {
    color: 'white',
    fontSize: 14, // Adjusted font size for better fit
  },
  countText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2C3E50',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  saveButton: {
    marginTop: 20,
    paddingVertical: 6, // Adjusted padding to match other buttons
    paddingHorizontal: 12, // Adjusted padding to match other buttons
    backgroundColor: '#3498DB',
    borderRadius: 8,
    alignItems: 'center',
    marginLeft:10,
    width: 80, // Set fixed width for consistency
  },
  saveButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14, // Adjusted font size for consistency
  },
  deleteButton: {
    marginTop: 20,
    paddingVertical: 6, // Adjusted padding to match other buttons
    paddingHorizontal: 12, // Adjusted padding to match other buttons
    backgroundColor: '#E74C3C',
    borderRadius: 8,
    alignItems: 'center',
    marginLeft:10,
    width: 80, // Set fixed width for consistency
  },
  deleteButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14, // Adjusted font size for consistency
  },
  closeButton: {
    marginTop: 20,
    paddingVertical: 6, // Adjusted padding to match other buttons
    paddingHorizontal: 12, // Adjusted padding to match other buttons
    backgroundColor: '#3498DB',
    borderRadius: 8,
    alignItems: 'center',
    marginLeft:10,
    width: 80, // Set fixed width for consistency
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14, // Adjusted font size for consistency
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fafafa',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    zIndex: 10,
  },
  
  footerText: {
    color: '#555555',
    fontSize: 14,
  },
  descriptionText: {
    color: '#34495E',
    fontSize: 16,
    marginBottom: 20,
  },
  linkText: {
    color: '#3498DB',
    fontSize: 16,
  },
  link: {
    textDecorationLine: 'underline',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Dark background with transparency
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 30,
    borderRadius: 15,
    width: '85%',
    alignItems: 'flex-start',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 15,
    elevation: 15,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2C3E50',
    marginBottom: 20,
  },
  profileInfoContainer: {
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  profileLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: '#7F8C8D',
  },
  profileText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#34495E',
  },
  closeButton: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#3498DB',
    borderRadius: 8,
    alignItems: 'center',
    width: '100%',
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  // Existing styles...

  statusButton: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginTop: 5,
  },
  statusButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  closeButton: {
    marginTop: 20,
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: '#3498DB',
    borderRadius: 8,
    alignItems: 'center',
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  input: {
    height:50,               // Height of the input box
    borderColor: '#000000',      // Border color
    borderWidth: 1,           // Border width
    borderRadius: 10,         // Rounded corners
    paddingHorizontal: 16,    // Padding inside the input
 
    fontSize: 16,             // Text size
    width: 200,            // Take full width of the parent
    marginBottom: 12,         // Spacing below the input
    backgroundColor: '#f9f9f9', // Light background color
  },
blackText: {
  color: 'black',
},
whiteBackground: {
  backgroundColor: 'white',
},
modalContainer: {
  flex: 1,
  backgroundColor: 'rgba(0,0,0,0.4)', // tmavý průhledný podklad
  justifyContent: 'center',
  alignItems: 'center',
  padding: 16,
},
modalContent: {
  backgroundColor: '#f9f9f9',
  width: '95%',
  maxHeight: '100%',
  borderRadius: 12,
  padding: 20,
  elevation: 5, // stín pro Android
  shadowColor: '#000', // stín pro iOS
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.25,
  shadowRadius: 4,
},
modalTitle: {
  fontSize: 22,
  fontWeight: '600',
  marginBottom: 16,
  color: '#2c3e50',
  textAlign: 'center',
},
tableHeader: {
  flexDirection: 'row',
  borderBottomWidth: 2,
  borderBottomColor: '#2980b9',
  paddingBottom: 8,
  marginBottom: 6,
},
tableHeaderText: {
  flex: 1,
  fontWeight: 'bold',
  color: '#2980b9',
  fontSize: 16,
  textAlign: 'center',
},
tableRow: {
  flexDirection: 'row',
  paddingVertical: 8,
  borderBottomWidth: 1,
  borderBottomColor: '#dcdcdc',
},
tableCell: {
  flex: 1,
  fontSize: 15,
  color: '#2c3e50',
  textAlign: 'center',
},
closeButton: {
  marginTop: 20,
  backgroundColor: '#2980b9',
  paddingVertical: 12,
  borderRadius: 8,
  alignItems: 'center',
},
closeButtonText: {
  color: '#fff',
  fontSize: 16,
  fontWeight: 'bold',
},
deleteButton: {
  padding: 6,
  borderRadius: 4,
  borderWidth: 1,
  border: "none"
},
modalContainer: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.5)', // Background overlay
},
modalContent: {
  width: '90%',
  backgroundColor: 'white',
  padding: 20,
  borderRadius: 10,
  maxHeight: '90%',
},
modalTitle: {
  fontSize: 20,
  fontWeight: 'bold',
  textAlign: 'center',
  marginBottom: 10,
},
tableHeader: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginBottom: 10,
  borderBottomWidth: 1,
  borderBottomColor: '#ddd',
},
tableHeaderText: {
  fontWeight: 'bold',
  flex: 1,
  textAlign: 'center',
},
tableRow: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginBottom: 15,
  paddingVertical: 10,
  borderBottomWidth: 1,
  borderBottomColor: '#ddd',
},
tableCell: {
  flex: 1,
  textAlign: 'center',
  fontSize: 16,
},
actionCell: {
  flexDirection: 'row',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  flex: 1,
},
editButton: {
  padding: 6,
  borderRadius: 4,
 
},
deleteButton: {
  padding: 6,
  borderRadius: 4,
  backgroundColor: '#e74c3c',
},
actionText: {
  color: 'white',
  fontSize: 20,
},
closeButton: {
  marginTop: 20,
  backgroundColor: '#3498db',
  paddingVertical: 10,
  borderRadius: 5,
  alignItems: 'center',
},
closeButtonText: {
  color: 'white',
  fontSize: 16,
},
card: {
  marginVertical: 10,
  padding: 10,
  backgroundColor: '#e0f2f1',
  borderRadius: 8,
},

// Style for the ScrollView to make it scrollable
scrollView: {
  maxHeight: 280, // Set the maximum height
  overflow: 'scroll', // Ensure scrollability
  width: '100%', // Full width
},

tableHeader: {
  flexDirection: 'row',
  paddingBottom: 10,
  borderBottomWidth: 2,
  borderBottomColor: '#ddd',
},
tableHeaderText: {
  flex: 1,
  fontWeight: 'bold',
  textAlign: 'center',
  color: 'black',
},

tableRow: {
  flexDirection: 'row',
  paddingVertical: 15,
  borderBottomWidth: 1,
  borderBottomColor: '#ddd',
},

tableCell: {
  flex: 1,
  textAlign: 'center',
  color: 'black',
},

actionCell: {
  flexDirection: 'row',
  justifyContent: 'space-evenly',
  alignItems: 'center',
},

editButton: {
  padding: 5,
  backgroundColor: '#f39c12',
  borderRadius: 5,
},
deleteButton: {
  padding: 5,
  backgroundColor: '#e74c3c',
  borderRadius: 5,
},

actionText: {
  color: 'white',
  fontSize: 18,
},

closeButton: {
  marginTop: 20,
  paddingVertical: 10,
  backgroundColor: '#3498db',
  borderRadius: 5,
  alignItems: 'center',
},

closeButtonText: {
  color: 'white',
  fontSize: 16,
},

overlay: {
  flex: 1,
  backgroundColor: 'rgba(0,0,0,0.5)', // nice dimmed background
  justifyContent: 'center',
  alignItems: 'center',
},
modal: {
  backgroundColor: '#fff',
  width: '90%',
  borderRadius: 16,
  padding: 20,
  position: 'relative',
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 0.3,
  shadowRadius: 10,
  elevation: 40,
},
closeButton: {
  position: 'absolute',
  right: 10,
  top: 10,
  zIndex: 10,
  padding: 5,
},
closeText: {
  fontSize: 22,
  fontWeight: 'bold',
  color: '#888',
},
title: {
  fontSize: 20,
  fontWeight: 'bold',
  marginBottom: 20,
  textAlign: 'center',
},
input: {
  borderWidth: 1,
  borderColor: '#ccc',
  borderRadius: 10,
  padding: 10,
  marginBottom: 12,
},
buttonContainer: {
  flexDirection: 'row',
  justifyContent: 'flex-end',
  marginTop: 10,
},
buttonCancel: {
  backgroundColor: '#bbb',
  paddingVertical: 10,
  paddingHorizontal: 16,
  borderRadius: 8,
  marginRight: 10,
},
buttonSave: {
  backgroundColor: '#4CAF50',
  paddingVertical: 10,
  paddingHorizontal: 16,
  borderRadius: 8,
},
buttonText: {
  color: '#fff',
  fontWeight: 'bold',
},

infoAboutBTN: {
  backgroundColor: '#3498DB', // červená pro zavření
  paddingVertical: 10,
  paddingHorizontal: 20,
  borderRadius: 10,
  alignItems: 'center',
  marginTop: 20,
  alignSelf: 'center', // zarovná doprostřed
  elevation: 2, // pro stín na Androidu
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.2,
  shadowRadius: 4,
  width:"100%"
},


closeButtonText: {
  color: '#fff',
  fontSize: 16,
 
  textTransform: 'uppercase',
  letterSpacing: 1,
},
modalContainer: {
  flex: 1,
  backgroundColor: 'rgba(0,0,0,0.5)',
  justifyContent: 'center',
  alignItems: 'center',
},
modalContent: {
  backgroundColor: '#fff',
  borderRadius: 16,
  padding: 20,
  width: '90%',
  maxHeight: '90%',
},
modalTitle: {
  fontSize: 20,
  fontWeight: 'bold',
  marginBottom: 10,
  fontFamily: 'Poppins_700Bold',
},
nameText: {
  fontSize: 16,
  marginBottom: 10,
  fontFamily: 'Poppins_400Regular',
},
formTitle: {
  fontSize: 18,
  fontWeight: '600',
  marginVertical: 10,
  fontFamily: 'Poppins_600SemiBold',
},
userInputContainer: {
  marginBottom: 10,
},
formContainer: {
  backgroundColor: '#f1f1f1',
  padding: 15,
  borderRadius: 10,
},
input: {
  backgroundColor: '#fff',
  borderWidth: 1,
  borderColor: '#ccc',
  borderRadius: 8,
  padding: 10,
  marginBottom: 10,
  fontFamily: 'Poppins_400Regular',
},
generatePasswordButton: {
  backgroundColor: '#6c757d',
  padding: 10,
  borderRadius: 6,
  marginBottom: 10,
  alignItems: 'center',
},
generatePasswordButtonText: {
  color: '#fff',
  fontWeight: '600',
  fontFamily: 'Poppins_600SemiBold',
},
buttonRow: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginTop: 20,
  gap: 10,
},
inlineButton: {
  flex: 1,
  paddingVertical: 10,
  borderRadius: 8,
  alignItems: 'center',
},
buttonTextWhite: {
  color: '#fff',
  fontSize: 14,
  fontWeight: '600',
  fontFamily: 'Poppins_600SemiBold',
},
modalContainer: {
  flex: 1,
  backgroundColor: 'rgba(0,0,0,0.3)',
  justifyContent: 'center',
  alignItems: 'center',
},
modalContent: {
  backgroundColor: '#ffffff',
  borderRadius: 12,
  padding: 20,
  width: '90%',
  shadowColor: '#000',
  shadowOpacity: 0.1,
  shadowRadius: 10,
  elevation: 4,
},
modalTitle: {
  fontSize: 18,
  fontWeight: '600',
  marginBottom: 10,
},
nameText: {
  fontSize: 16,
  marginBottom: 15,
},
formTitle: {
  fontSize: 16,
  fontWeight: '500',
  marginBottom: 10,
},
userInputContainer: {
  marginBottom: 0,
},
formContainer: {
  padding: 15,
  borderRadius: 8,
  backgroundColor: '#f9f9f9',
  borderWidth: 1,
  borderColor: '#e0e0e0',
},
input: {
  borderWidth: 1,
  borderColor: '#cccccc',
  borderRadius: 8,
  padding: 10,
  marginBottom: 10,
  fontSize: 14,
},
subtleButton: {
  paddingVertical: 8,
  alignItems: 'center',
},
subtleButtonText: {
  fontSize: 14,
  color: '#555',
  textDecorationLine: 'underline',
},
buttonRow: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginTop: 8,
  
},
primaryButton: {
  flex: 1,
  backgroundColor: '#388E3C',
  paddingVertical: 10,
  paddingHorizontal:10,
  borderRadius: 8,
  marginRight: 5,
  alignItems: 'center',
},
secondaryButton: {
  flex: 1,
  backgroundColor: '#3498DB',
  paddingVertical: 10,
  paddingHorizontal:10,
  borderRadius: 8,
  marginHorizontal: 5,
  alignItems: 'center',
},
cancelButton: {
  flex: 1,
  backgroundColor: '#388E3C',
  paddingVertical: 10,
  paddingHorizontal:10,
  borderRadius: 8,
  marginLeft: 15,
  alignItems: 'center',
},
buttonText: {
  color: '#fff',
  fontSize: 14,
  fontWeight: '500',
},

closeIcon: {
  position: 'absolute',
  top: 10,
  right: 10,
  zIndex: 1,
  backgroundColor: '#eee',
  borderRadius: 20,
  width: 30,
  height: 30,
  alignItems: 'center',
  justifyContent: 'center',
},
closeIconText: {
  fontSize: 18,
  color: '#333',
},
saveButtonText: {
  color: '#fff',
  fontSize: 16,
  fontWeight: '600',
  textAlign: 'center',
},

deleteButtonText: {
  color: '#fff',
  fontSize: 16,
  fontWeight: '600',
  textAlign: 'center',
},

closeButtonText: {
  color: '#fff',
  fontSize: 16,
  fontWeight: '600',
  textAlign: 'center',
},

// Tlačítka obalující styly
saveButton: {
  backgroundColor: '#007BFF', // modrá (primární)
  paddingVertical: 12,
  paddingHorizontal: 20,
  borderRadius: 8,
  marginBottom: 10,
  alignItems: 'center',
},

deleteButtonMap: {
  backgroundColor: '#dc3545', // červená (nebezpečí)
  paddingVertical: 12,
  paddingHorizontal: 20,
  borderRadius: 8,
  marginBottom: 10,
  alignItems: 'center',
},

closeButtonMap: {
  backgroundColor: '#6c757d', // šedá (sekundární)
  paddingVertical: 12,
  paddingHorizontal: 20,
  borderRadius: 8,
  alignItems: 'center',
},

// (Volitelně) Wrapper pro všechny tlačítka
actions: {
  marginTop: 20,
  gap: 12,
},

map: {
  flex: 1,
},
calloutText: {
  fontSize: 14,
},
modalContainer: {
  flex: 1,
  backgroundColor: 'rgba(0,0,0,0.3)',
  justifyContent: 'center',
  padding: 20,
},
modalContent: {
  backgroundColor: '#fff',
  borderRadius: 12,
  padding: 20,
  shadowColor: '#000',
  shadowOpacity: 0.2,
  shadowRadius: 6,
  elevation: 5,
},
modalTitle: {
  fontSize: 20,
  fontWeight: 'bold',
  marginBottom: 8,
},
modalSubtitle: {
  fontSize: 16,
  color: '#555',
},
modalText: {
  fontSize: 14,
  marginBottom: 16,
},
cards: {
  marginBottom: 16,
},
cardTitle: {
  fontWeight: '600',
  fontSize: 16,
  marginBottom: 8,
},
countControl: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 10,
},
countButton: {
  
  borderRadius: 6,
  paddingHorizontal: 15,
  paddingVertical: 8,
},
countButtonText: {
  color: '#000',
  fontSize: 32,
  fontWeight: 'bold',
},
countText: {
  fontSize: 18,
  marginHorizontal: 12,
},
actionsRow: {
  
  marginTop: 20,
  marginBottom:10
},
actionButton: {
  
  paddingVertical: 12,
  borderRadius: 8,
  alignItems: 'center',
},
saveButton: {
  backgroundColor: '#237a3b',
},
deleteButtonMap: {
  backgroundColor: '#3498DB',
},
closeButtonMap: {
  backgroundColor: '#6c757d',
},
buttonText: {
  color: '#fff',
  fontSize: 16,
  fontWeight: '600',
},

closeXButton: {
  position: 'absolute',
  top: 10,
  right: 10,
  zIndex: 10,
  padding: 5,
},

closeXText: {
  fontSize: 22,
  color: '#333',
  fontWeight: '600',
},

userSection: {
  padding: 0,
   // light background for better contrast
  borderRadius: 10,
  marginTop: 10,
  marginBottom: 20,
},
row: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginBottom: 15,
},
input: {
  height: 50,
  backgroundColor: '#fff',
  borderWidth: 1,
  borderColor: '#ccc',
  borderRadius: 8,
  paddingLeft: 15,
  fontSize: 16,
  color: '#333',
  fontFamily: 'Arial',
},
halfWidth: {
  width: '49%', // To make both fields take up half the width of the row
},
label: {
  fontSize: 18,
  fontWeight: '600',
  color: '#444',  // slightly darker color for the label
  marginBottom: 5,
},

hr: {
  height:4 ,
  backgroundColor: '#ddd',
  marginVertical: 10,
  width:"100%"
},

userSection: {

  borderRadius: 10,
  marginTop: 20,
  marginBottom: 20,



},
row: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginBottom: 20, // Increased spacing for visual balance
},
input: {
  height: 50,
  backgroundColor: '#fff',
  borderWidth: 1,
  borderColor: '#ddd',
  borderRadius: 10,
  paddingLeft: 15,
  fontSize: 16,
  color: '#333',
  fontFamily: 'Arial',
  marginVertical: 5, // Better spacing between inputs
},
halfWidth: {
  width: '48%', // Make fields side by side with a small gap
},
hr: {
  height: 2,
  backgroundColor: '#6c757d', // Lighter line for a subtle effect
  marginVertical: 20, // More space between sections
},
paragraphContainer: {
  marginTop: 10,
  paddingHorizontal: 10,
},
paragraphText: {
  fontSize: 16,
  color: '#333',
  lineHeight: 22,
  fontFamily: 'Arial',
  textAlign: 'center', // Center text for better readability
  fontWeight: '500', // Make it slightly bolder to highlight
},
actionCell: {
  flexDirection: 'row',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  width: '33%', // Ensure that the buttons fit within the available space
  paddingVertical: 8,
},
editButton: {
  backgroundColor: '#4CAF50', // Green color for the edit button
  paddingVertical: 10,
  paddingHorizontal: 12,
  borderRadius: 30,
  shadowColor: '#4CAF50',
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 0.2,
  shadowRadius: 5,
  elevation: 3,
  alignItems: 'center',
  justifyContent: 'center',
  width: 45, // Set a fixed width for consistency
  height: 45, // Set a fixed height for consistency
},
deleteButton: {
  backgroundColor: '#2196F3', // Blue color for the delete button
  paddingVertical: 10,
  paddingHorizontal: 12,
  borderRadius: 30,
  shadowColor: '#2196F3',
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 0.2,
  shadowRadius: 5,
  elevation: 3,
  alignItems: 'center',
  justifyContent: 'center',
  width: 45, // Set a fixed width for consistency
  height: 45, // Set a fixed height for consistency
},
actionText: {
  color: 'white',
  fontSize: 22, // Increase font size for better visibility
},

closeButton: {
  position: 'absolute',
  top: 16,
  right: 16,
  zIndex: 10,
  backgroundColor: '#eee',
  borderRadius: 20,
  paddingHorizontal: 10,
  paddingVertical: 4,
},
closeText: {
  fontSize: 18,
  color: '#666',
},
title: {
  fontSize: 22,
  fontWeight: '600',
  color: '#333',
  textAlign: 'center',
  marginBottom: 24,
  marginTop: 12,
},
form: {
  marginBottom: 20,
},
input: {
  backgroundColor: '#f1f1f1',
  padding: 14,
  borderRadius: 12,
  marginBottom: 14,
  fontSize: 16,
  color: '#333',
},
buttonContainer: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginTop: 10,
},
buttonCancel: {
  backgroundColor: '#ccc',
  paddingVertical: 12,
  paddingHorizontal: 20,
  borderRadius: 12,
  flex: 1,
  marginRight: 10,
},
buttonSave: {
  backgroundColor: '#388E3C', // green
  paddingVertical: 12,
  paddingHorizontal: 20,
  borderRadius: 12,
  flex: 1,
},
buttonCancelText: {
  color: '#333',
  textAlign: 'center',
  fontWeight: '600',
  fontSize: 16,
},
buttonSaveText: {
  color: 'white',
  textAlign: 'center',
  fontWeight: '600',
  fontSize: 16,
},

card: {
  backgroundColor: '#FFFFFF',
  borderRadius: 16,
  padding: 20,
  marginBottom: 20,
  shadowColor: '#000',
  shadowOpacity: 0.08,
  shadowOffset: { width: 0, height: 2 },
  shadowRadius: 6,
  elevation: 3,
},
cardHeader: {
  fontSize: 18,
  fontWeight: '600',
  color: '#2E7D32',
  marginBottom: 16,
},
inputField: {
  backgroundColor: '#F9FAFB',
  borderColor: '#D1D5DB',
  borderWidth: 1,
  borderRadius: 10,
  paddingHorizontal: 14,
  paddingVertical: 10,
  fontSize: 16,
  marginBottom: 12,
},
addCarButton: {
  backgroundColor: '#388E3C',
  paddingVertical: 14,
  borderRadius: 12,
  alignItems: 'center',
  marginTop: 10,
},
addCarButtonText: {
  color: '#FFFFFF',
  fontSize: 16,
  fontWeight: '600',
},

profileModalOverlay: {
  flex: 1,
  backgroundColor: 'rgba(0,0,0,0.5)',
  justifyContent: 'center',
  alignItems: 'center',
},
profileModalContent: {
  backgroundColor: '#fff',
  borderRadius: 20,
  padding: 20,
  width: '90%',
  maxHeight: '90%',
},
profileCloseIcon: {
  position: 'absolute',
  top: 10,
  right: 15,
},
profileCloseIconText: {
  fontSize: 24,
  color: '#888',
},
profileModalTitle: {
  fontSize: 22,
  fontWeight: '700',
  color: '#2E7D32',
  textAlign: 'center',
  marginBottom: 16,
},

// ADMIN SECTION
adminFormTitle: {
  fontSize: 18,
  fontWeight: '600',
  marginBottom: 10,
  color: '#444',
},
adminScrollArea: {
  paddingBottom: 10,
},
adminUserCard: {
  backgroundColor: '#f9f9f9',
  borderRadius: 12,
  padding: 16,
  marginBottom: 10,
  elevation: 1,
},
adminInputField: {
  backgroundColor: '#f0f0f0',
  borderRadius: 10,
  padding: 10,
  marginBottom: 10,
  fontSize: 15,
},
adminSubtleBtn: {
  paddingVertical: 8,
  alignItems: 'flex-start',
},
adminSubtleBtnText: {
  color: '#388E3C',
  fontWeight: '600',
},
adminBtnRow: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginTop: 12,
},
adminPrimaryBtn: {
  backgroundColor: '#388E3C',
  borderRadius: 10,
  paddingVertical: 12,
  paddingHorizontal: 20,
  alignItems: 'center',
  flex: 1,
  marginRight: 8,
},
adminSecondaryBtn: {
  backgroundColor: '#1976D2',
  borderRadius: 10,
  paddingVertical: 12,
  paddingHorizontal: 20,
  alignItems: 'center',
  flex: 1,
  marginLeft: 8,
},
adminBtnText: {
  color: '#fff',
  fontWeight: '600',
  fontSize: 15,
},

// USER SECTION
userProfileSection: {
  gap: 16,
  paddingTop: 10,
},
userCard: {
  backgroundColor: '#fff',
  borderRadius: 12,
  padding: 16,
  shadowColor: '#000',
  shadowOpacity: 0.05,
  shadowOffset: { width: 0, height: 2 },
  shadowRadius: 4,
  elevation: 2,
},
userCardTitle: {
  fontSize: 16,
  fontWeight: '600',
  marginBottom: 12,
  color: '#2E7D32',
},
userRow: {
  flexDirection: 'row',
  gap: 10,
},
userInput: {
  backgroundColor: '#f0f0f0',
  borderRadius: 10,
  padding: 10,
  fontSize: 15,
  marginBottom: 10,
},
userHalfInput: {
  flex: 1,
},
userActivityText: {
  fontSize: 14,
  color: '#555',
},
userCarBtn: {
  backgroundColor: '#388E3C',
  paddingVertical: 12,
  borderRadius: 10,
  alignItems: 'center',
},
userCarBtnText: {
  color: '#fff',
  fontWeight: '600',
  fontSize: 15,
},

select: {
  borderWidth: 1,
  height:60,
  borderColor: '#ccc',
  paddingHorizontal: 10,
  paddingVertical: 12,
  borderRadius: 8,
  backgroundColor: '#fff',
  marginBottom: 10,
},
 // Modal Overlay (Background)
 modalOverlay: {
  flex: 1,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',  // Semi-transparent black background
  justifyContent: 'center',
  alignItems: 'center',
},

// Modal Content (Inner container with rounded corners)
modalContent: {
  backgroundColor: 'white',
  borderRadius: 10,
  width: '90%',
  maxHeight: '80%',
  padding: 20,
  alignItems: 'center',
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.25,
  shadowRadius: 4,
  elevation: 5,  // For Android
},

// Modal Header Text
modalHeaderText: {
  fontSize: 24,
  fontWeight: 'bold',
  marginBottom: 20,
  color: '#333',
},

// ScrollView for users' table
usersScrollView: {
  width: '100%',
},

// Table Header Row
tableHeaderRow: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  paddingVertical: 10,
  borderBottomWidth: 1,
  borderBottomColor: '#ccc',
  marginBottom: 20,
},

// Table Header Item (Each header label)
tableHeaderItem: {
  fontSize: 16,
  fontWeight: 'bold',
  color: '#333',
  width: '70%',  // Adjust widths for each column
  textAlign: 'center',
},

// User Row (Each row of data)
userRow: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  paddingVertical: 12,
  borderBottomWidth: 1,
  borderBottomColor: '#f0f0f0',
  marginBottom:10
},

// User Column (Each individual cell in the row)
userColumn: {
  fontSize: 16,
  color: '#444',
  width: '30%',
  textAlign: 'center',
},

// Action Buttons Container (For edit and delete actions)
actionButtonsContainer: {
  flexDirection: 'row',
  justifyContent: 'center',
  width: '30%',
  paddingHorizontal: 5,
},

// Action Button (Base style for edit and delete buttons)
actionButton: {
  backgroundColor: '#f4f4f4',
  paddingVertical: 6,
  paddingHorizontal: 12,
  borderRadius: 8,
  marginHorizontal: 5,
  justifyContent: 'center',
  alignItems: 'center',
},

// Edit Action Button (Green button for editing)
editActionButton: {
  backgroundColor: '#4CAF50',
},

// Delete Action Button (Red button for deleting)
deleteActionButton: {
  backgroundColor: '#F44336',
},

// Action Button Text (Icon text inside the action buttons)
actionButtonText: {
  color: 'white',
  fontSize: 18,
},

// Close Modal Button (Button to close the modal)
closeModalButton: {
  marginTop: 20,
  paddingVertical: 10,
  paddingHorizontal: 30,
  backgroundColor: '#2196F3',
  borderRadius: 8,
},

// Close Modal Button Text
closeModalButtonText: {
  fontSize: 16,
  color: 'white',
  fontWeight: 'bold',
}, // Modal Overlay (Background)
modalOverlay: {
  flex: 1,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',  // Semi-transparent black background
  justifyContent: 'center',
  alignItems: 'center',
},

// Modal Content (Inner container with rounded corners)
modalContent: {
  backgroundColor: 'white',
  borderRadius: 10,
  width: '90%',
  maxHeight: '80%',
  padding: 20,
  alignItems: 'center',
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.25,
  shadowRadius: 4,
  elevation: 5,  // For Android
},

// Modal Header Text
modalHeaderText: {
  fontSize: 24,
  fontWeight: 'bold',
  marginBottom: 20,
  color: '#333',
},

// ScrollView for users' table
usersScrollView: {
  width: '100%',
},

// Table Header Row
tableHeaderRow: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  paddingVertical: 10,
  borderBottomWidth: 1,
  borderBottomColor: '#ccc',
  marginBottom: 10,
},

// Table Header Item (Each header label)
tableHeaderItem: {
  fontSize: 16,
  fontWeight: 'bold',
  color: '#333',
  width: '30%',  // Adjust widths for each column
  textAlign: 'center',
},

// User Row (Each row of data)
userRow: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  paddingVertical: 12,
  borderBottomWidth: 1,
  borderBottomColor: '#f0f0f0',
},

// User Column (Each individual cell in the row)
userColumn: {
  fontSize: 16,
  color: '#444',
  width: '30%',
  textAlign: 'center',
},

// Action Buttons Container (For edit and delete actions)
actionButtonsContainer: {
  flexDirection: 'row',
  justifyContent: 'center',
  width: '30%',
  paddingHorizontal: 5,
},

// Action Button (Base style for edit and delete buttons)
actionButton: {
  backgroundColor: '#f4f4f4',
  paddingVertical: 6,
  paddingHorizontal: 12,
  borderRadius: 8,
  marginHorizontal: 5,
  justifyContent: 'center',
  alignItems: 'center',
},

// Edit Action Button (Green button for editing)
editActionButton: {
  backgroundColor: '#4CAF50',
},

// Delete Action Button (Red button for deleting)
deleteActionButton: {
  backgroundColor: '#F44336',
},

// Action Button Text (Icon text inside the action buttons)
actionButtonText: {
  color: 'white',
  fontSize: 18,
},

// Close Modal Button (Button to close the modal)
closeModalButton: {
  marginTop: 20,
  paddingVertical: 10,
  paddingHorizontal: 30,
  backgroundColor: '#2196F3',
  borderRadius: 8,
},

// Close Modal Button Text
closeModalButtonText: {
  fontSize: 16,
  color: 'white',
  fontWeight: 'bold',
},

  userProfileSection: {
    padding: 20,
    backgroundColor: '#fff', // Light background for clarity
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3, // Adds shadow for elevation on Android
  },

  userCard: {
    marginBottom: 20, // Adds space between sections
    padding: 15,
    backgroundColor: '#f8f8f8', // Light gray background for cards
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd', // Light border color for the cards
  },

  userCardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10, // Adds space below the title
    color: '#333', // Dark text for readability
  },

  userRow: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Ensures inputs are spaced
    alignItems: 'center',
  },

  userInput: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: '#eaeaea', // Slightly darker background for input fields
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc', // Light border color for inputs
    width: '48%', // Allows two inputs to fit side-by-side
  },

  userHalfInput: {
    width: '48%', // Ensures both inputs take up 48% of the row width
  },

  userActivityText: {
    fontSize: 16,
    color: '#555', // Lighter text color for the activity section
    marginTop: 5,
  },

  userCarBtn: {
    marginTop: 20,
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: '#2E7D32', // Green background for the button
    borderRadius: 8,
    alignSelf: 'center', // Centers the button horizontally
  },

  userCarBtnText: {
    color: '#fff', // White text color
    fontSize: 16,
    fontWeight: 'bold',
  },

  closeButton: {
    backgroundColor: '#2E7D32',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignSelf: 'center',
    width: '100%',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },

  userInputNoAdmin: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: '#f4f4f4', // Light background color for disabled input fields
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc', // Light border color to indicate it's a form field
    width: '100%', // Full width of the parent container
    marginBottom: 12, // Add space below the input field
    color: '#888', // Slightly darker text color to indicate it's read-only
    textAlign: 'left', // Ensure the text is aligned to the left
  },

  // Example of other styling classes, you can add them if needed
  userCard: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  userCardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  userProfileSection: {
    padding: 20,
    backgroundColor: '#f9f9f9',
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  
  userCardNoAdmin: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 3,
  },
  
  userCardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2C3E50',
    marginBottom: 10,
  },
  
  userActivityText: {
    fontSize: 16,
    color: '#7F8C8D',
  },
  
  userGreetingText: {
    fontSize: 16,
    color: '#2980B9',
    fontStyle: 'italic',
    marginTop: 5,
    fontWeight: 'bold',
  },
  
  userRows: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  userProfileScroll: {
    padding: 20,
    alignItems: 'center',
  },
  
  userCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    marginVertical: 10,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
    alignItems: 'center',
  },
  
  userCardTitle: {
    fontSize: 18,
    fontWeight: '300',
    color: '#333',
    marginBottom: 10,
  },
  
  userCardValue: {
    fontSize: 16,
    color: '#666',
  },
  
  userGreeting: {
    marginTop: 10,
    fontSize: 14,
    color: '#4CAF50',
    textAlign: 'center',
  },
  
  logoutButton: {
    backgroundColor: '#9E9E9E',
    paddingVertical: 12,
    paddingHorizontal: 32,
    width: '100%',
    marginTop: 30,
    borderRadius: 12,
    alignItems: 'center', // centers the text horizontally
  },
  
  logoutButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
  },
  
    userProfileScroll: {
    padding: 24,

    alignItems: 'center',
  },
  userCard: {
    backgroundColor: '#fff',
    width: '100%',
    maxWidth: 420,
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
   
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5,
  },
  userCardTitle: {
    fontSize: 16,
    color: '#888',
    fontWeight: '400',
    marginBottom: 4,
  },
  userCardValue: {
    fontSize: 20,
    fontWeight: '700',
    color: '#2E2E2E',
  },
  userGreeting: {
    marginTop: 12,
    fontSize: 16,
    color: '#4CAF50',
    fontStyle: 'italic',
    fontWeight: '500',
  },
  logoutButton: {
     backgroundColor: '#4CAF50', 
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 12,
    alignItems: 'center',
    width: '100%',
    maxWidth: 420,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 4,
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },

});


/*     //-------------------- MAP STYLE  --------------------- */

const map = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    padding: 20,
  },
    countfer: {
    borderWidth: 1,
    borderColor: '#888',
    borderRadius: 6,
    paddingVertical: 8,
    paddingHorizontal: 12,
    fontSize: 16,
    
    textAlign: 'center',
    color: '#333',
    backgroundColor: '#f9f9f9',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 10,
  },
  
  floatingClose: {
    position: 'absolute',
    right: 16,
    top: 16,
    zIndex: 1,
    backgroundColor: '#eee',
    borderRadius: 20,
    padding: 8,
  },
  closeIcon: {
    fontSize: 18,
    color: '#333',
  },
  editStateButton: {
    alignSelf: 'flex-start',
    marginBottom: 8,
    paddingVertical: 6,
    paddingHorizontal: 10,
    backgroundColor: '#E3F2FD',
    borderRadius: 8,
  },
  editStateText: {
    fontSize: 13,
    color: '#1565C0',
    fontWeight: '600',
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
    marginVertical: 20,
    color: '#222',
  },
  card: {
    backgroundColor: '#F9FAFB',
    borderRadius: 14,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    elevation: 1,
  },
  cardLabel: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
    color: '#555',
  },
  counterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  counterBtn: {
    backgroundColor: '#E0E0E0',
    padding: 12,
    borderRadius: 10,
  },
  counterText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  counterInput: {
    fontSize: 18,
    textAlign: 'center',
    minWidth: 60,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  actions: {
    marginTop: 20,
  },
  primaryBtn: {
    backgroundColor: '#4CAF50',
    paddingVertical: 14,
    borderRadius: 12,
    marginBottom: 10,
  },
  primaryText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 16,
  },
  deleteBtn: {
    backgroundColor: '#f44336',
    paddingVertical: 14,
    borderRadius: 12,
  },
  deleteText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 16,
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  counterBtn: {
    backgroundColor: '#007bff',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  counterText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
  },
  counterInput: {
    flex: 1,
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 6,
    textAlign: 'center',
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
  },
  picker: {
    height: 40,
    width: '100%',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  primaryBtn: {
    backgroundColor: '#28a745',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    flex: 1,
    marginRight: 5,
    alignItems: 'center',
  },
  primaryText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
  deleteBtn: {
    backgroundColor: '#dc3545',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    flex: 1,
    marginLeft: 5,
    alignItems: 'center',
  },
  deleteText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
  secondaryBtn: {
    backgroundColor: '#6c757d',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    flex: 1,
    marginLeft: 5,
    alignItems: 'center',
  },
  secondaryText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
   primaryBtn: {
    flex: 1,
    backgroundColor: '#4CAF50', // hezká zelená
    paddingVertical: 14,
    marginHorizontal: 5,
    borderRadius: 8,
    alignItems: 'center',
  },
  primaryText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  deleteBtn: {
    flex: 1,
    backgroundColor: '#E53935', // červená pro mazání
    paddingVertical: 14,
    marginHorizontal: 5,
    borderRadius: 8,
    alignItems: 'center',
  },
  deleteText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  secondaryBtn: {
    flex: 1,
    backgroundColor: '#2196F3', // modrá barva pro zpět
    paddingVertical: 14,
    marginHorizontal: 5,
    borderRadius: 8,
    alignItems: 'center',
  },
  secondaryText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});

 const personProfile = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '90%',
    maxHeight: '92%',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 24,
    elevation: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.25,
    shadowRadius: 16,
  },
  closeBtn: {
    position: 'absolute',
    right: 20,
    top: 20,
    zIndex: 10,
  },
  closeText: {
    fontSize: 22,
    color: '#888',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1e1e1e',
    textAlign: 'center',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '500',
    color: '#333',
    marginBottom: 12,
  },
  scrollArea: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#f8f9fb',
    padding: 16,
    borderRadius: 14,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#e2e6ea',
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 10,
    fontSize: 16,
    marginBottom: 10,
  },
  select: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    marginTop: -13,
    padding: 10,
  },
  linkBtn: {
    paddingVertical: 6,
  },
  linkText: {
    fontSize: 14,
    color: '#007AFF',
  },
  btnRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  primaryBtn: {
    flex: 1,
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    marginRight: 10,
    borderRadius: 12,
  },
  secondaryBtn: {
    flex: 1,
    backgroundColor: '#e6e6e6',
    paddingVertical: 12,
    marginLeft: 10,
    borderRadius: 12,
  },
  btnText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
    textAlign: 'center',
  },
  secondaryBtnText: {
    color: '#333',
    fontWeight: '600',
    fontSize: 16,
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    color: '#444',
    marginBottom: 4,
  },
  value: {
    fontSize: 18,
    fontWeight: '500',
    color: '#222',
  },
  greeting: {
    fontSize: 19,
    marginTop: 10,
    color: '#666',
    fontStyle: 'italic',
    textAlign:"center",
    color:"green"
  },
});



const edittedOneForm = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  container: {
    backgroundColor: '#fff',
    width: '100%',
    maxWidth: 500,
    borderRadius: 16,
    padding: 20,
    elevation: 6,
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 10,
  },
  closeButtonText: {
    fontSize: 22,
    color: '#888',
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#000',
    marginBottom: 15,
    textAlign: 'center',
  },
  section: {
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
    marginTop: 10,
    color: '#444',
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    color: '#555',
    marginBottom: 6,
  },
  picker: {
    backgroundColor: '#f1f1f1',
    borderRadius: 8,
    height: 54,
    marginTop: 4,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
    marginBottom: 15,
  },
  input: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    paddingVertical: 18,
    paddingHorizontal: 12,
    borderRadius: 8,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  inputText: {
    fontSize: 16,
    color: '#333',
  },
  countControl: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f1f1f1',
    borderRadius: 8,
    overflow: 'hidden',
  },
  countButton: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    backgroundColor: '#e0e0e0',
  },
  countButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2E7D32',
  },
  countValue: {
    paddingHorizontal: 20,
    fontSize: 16,
    textAlign: 'center',
    minWidth: 60,
    backgroundColor: '#fff',
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: '#ccc',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
    marginTop: 20,
  },
  button: {
    flex: 1,
    backgroundColor: '#2E7D32',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    
  },
  cancelButton: {
    backgroundColor: '#9e9e9e',
    
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});




/*     //-------------------- ABOUT STYLES  --------------------- */

  const aboutStyles = StyleSheet.create({
 backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  modalBox: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 28,
    width: '100%',
    maxWidth: 420,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1A1A1A',
    marginBottom: 16,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#444',
    marginBottom: 20,
    lineHeight: 24,
    textAlign: 'center',
  },
  bold: {
    fontWeight: '600',
    color: '#2E7D32',
  },
  label: {
    fontSize: 15,
    color: '#333',
    marginBottom: 28,
    textAlign: 'center',
  },
  link: {
    color: '#1E88E5',
    textDecorationLine: 'underline',
    fontWeight: '500',
  },
 closeButton: {
  backgroundColor: '#2E7D32',
  paddingVertical: 14,
  borderRadius: 12,
  alignItems: 'center',
  width: '80%',
  alignSelf: 'center', // ✅ This centers the button horizontally
},

  closeText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '400',
  },
});
const stylesUsers = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  container: {
    width: '100%',
    maxHeight: '85%',
    backgroundColor: '#FAFAFA',
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 10,
  },
  header: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 16,
    textAlign: 'center',
    color: '#1E3A8A',
  },
  scrollView: {
    maxHeight: 300,
    marginBottom: 16,
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#E3EAFD',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    padding: 10,
  },
  tableHeaderCell: {
    flex: 1,
    fontWeight: 'bold',
    color: '#1E293B',
    fontSize: 14,
    textAlign: 'center',
  },
  cardRow: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    marginVertical: 6,
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 8,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
    alignItems: 'center',
  },
  cell: {
    flex: 1,
    fontSize: 13,
    color: '#334155',
    textAlign: 'center',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
    flex: 1,
  },
  actionBtn: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 6,
  },
  editBtn: {
    backgroundColor: '#3B82F6',
  },
  deleteBtn: {
    backgroundColor: '#EF4444',
  },
  btnText: {
    color: '#FFF',
    fontSize: 15,
    textAlign: 'center',
  },
  closeBtn: {
    backgroundColor: '#10B981',
    paddingVertical: 12,
    borderRadius: 12,
  },
  closeBtnText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
  },
});


/*     //-------------------- OTHERS FORM  --------------------- */

const stylesForm = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  container: {
    width: '100%',
    maxHeight: '90%',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    elevation: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    color: '#1E3A8A',
    marginBottom: 20,
    textAlign: 'center',
  },
  formGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 15,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 6,
  },
  input: {
    borderWidth: 1,
    borderColor: '#D1D5DB',
    backgroundColor: '#F9FAFB',
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 10,
    fontSize: 15,
    color: '#111827',
  },
  pickerWrapper: {
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 10,
    backgroundColor: '#F9FAFB',
    overflow: 'hidden',
  },
  picker: {
    height: 50,
    width: '100%',
    color: '#111827',
  },
  generateBtn: {
    marginTop: 8,
    backgroundColor: '#3B82F6',
    paddingVertical: 10,
    borderRadius: 8,
  },
  generateBtnText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 15,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
  },
  cancelButton: {
    flex: 1,
    backgroundColor: '#E5E7EB',
    paddingVertical: 12,
    borderRadius: 10,
    marginRight: 8,
  },
  cancelText: {
    color: '#374151',
    textAlign: 'center',
    fontWeight: '500',
    fontSize:16
  },
  saveButton: {
    flex: 1,
    backgroundColor: '#10B981',
    paddingVertical: 12,
    borderRadius: 10,
    marginLeft: 8,
  },
  saveText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '500',
    fontSize:16
  },
});



  const formStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F6F8', // Light background
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    gap: 12,
    marginBottom: 16,
  },

  column: {
    flex: 1,
  },

  pickerWrapper: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    backgroundColor: '#fff',
    overflow: 'hidden',
    justifyContent: 'center',
  },

  picker: {
    height: 45,
    width: '100%',
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    backgroundColor: '#fff',
    color: '#333',
  },

  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 6,
  },

  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
    marginTop: 20,
    width: '100%',
  },

  selectBtn: {
    backgroundColor: '#1976D2',
    paddingVertical: 12,
    borderRadius: 10,
    flex: 1,
    alignItems: 'center',
  },

  selectBtnText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});





  const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b30000',
    padding: 24,
  },
  title: {
    fontSize: 20,
    color: '#fff',
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 24,
  },
  block: {
    marginBottom: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  halfBlock: {
    flex: 0.48,
  },
  label: {
    color: '#fff',
    marginBottom: 4,
    fontSize: 14,
  },
  input: {
    height: 48,
    borderRadius: 10,
    paddingHorizontal: 12,
    justifyContent: 'center',
  },
  labelBg: {
    backgroundColor: '#fdd1f9',
  },
  pickerBg: {
    backgroundColor: '#1f77ff',
  },
  pickerText: {
    color: '#fff',
    fontWeight: '500',
  },
  textInputBg: {
    backgroundColor: '#fef277',
  },
  dateBg: {
    backgroundColor: '#d78e2c',
  },
});


  const carsStyles = StyleSheet.create({
  
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  
  container: {
    width: '100%',
    maxHeight: '85%',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    elevation: 5,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
    color: '#2E7D32',
  },
  scrollView: {
    maxHeight: 270,
    marginBottom: 16,
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#E0E0E0',
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    padding: 8,
  },
  tableHeaderCell: {
    flex: 1,
    fontWeight: 'bold',
    color: '#444',
    fontSize: 14,
    textAlign: 'center',
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#eee',
    paddingVertical: 10,
    alignItems: 'center',
  },
  cell: {
    flex: 1,
    fontSize: 13,
    color: '#333',
    textAlign: 'center',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
    flex: 1,
  },
  actionBtn: {
    padding: 6,
    borderRadius: 6,
  },
  editBtn: {
    backgroundColor: '#1976D2',
  },
  deleteBtn: {
    backgroundColor: '#D32F2F',
  },
  btnText: {
    color: '#fff',
    fontSize: 16,
  },
  footerButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
  addBtn: {
    flex: 1,
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    borderRadius: 10,
    width:"100%",
  },
  closeBtn: {
    flex: 1,
    backgroundColor: '#9E9E9E',
    paddingVertical: 10,
    borderRadius: 10,
    width:"100%",
  },
  footerText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',

  },

  formGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 6,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    fontSize: 15,
    marginBottom:10,
    backgroundColor: '#fff',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  cancelButton: {
    flex: 1,
    backgroundColor: 'red',
    padding: 12,
    borderRadius: 8,
   marginLeft:15,
    alignItems: 'center',
    width:"100%",
  },
  cancelText: {
    color: '#fff',
    fontSize:16,
    fontWeight: '400',
  },
  saveButton: {
    flex: 1,
    backgroundColor: '#4CAF50',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  saveText: {
    color: '#fff',
     fontSize:16,
    fontWeight: '400',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#2E7D32',
  },
  container: {
    width: '90%',
    maxWidth: 400,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    elevation: 6,
  },

  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Dim background
    justifyContent: "center",
    alignItems: "center",
  },
  editContainer: {
    width: "85%",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  editHeader: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  editInput: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 10,
    marginTop:10,
    marginBottom: 15,
    fontSize: 16,
    color: "#333",
  },
  editFooterButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 10,
  },
  editSaveBtn: {
    flex: 1,
    backgroundColor: "#4CAF50",
    padding: 12,
    marginRight: 5,
    borderRadius: 10,
    alignItems: "center",
  },
  editCloseBtn: {
    flex: 1,
    backgroundColor: "#F44336",
    padding: 12,
    marginLeft: 5,
    borderRadius: 10,
    alignItems: "center",
  },
  editBtnText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  }
  ,footerButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  
  updateBtn: {
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginHorizontal: 5,
  },
  
  saveBtn: {
    backgroundColor: '#2196F3',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginHorizontal: 5,
  },
  
  closeBtn: {
    backgroundColor: '#F44336',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginHorizontal: 5,
  },
  
  footerText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  
  closeBtnForm: {
    position: 'absolute',
    top: 10,
    right: 10,
    borderRadius: 25,
    padding: 10,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1, // Ensures it stays on top of other elements
  },
  
  closeEditForm: {
    fontSize: 20,
    color: '#ffffff', // Red color for "X"
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 30, // Center "X" properly within the circle
  }
  ,footerButtons: {
    width: '100%',
    flexDirection: 'column', // Stack buttons vertically
    justifyContent: 'space-between',
    marginTop: 15, // Optional margin for spacing
    gap: 10, // Add gap between buttons
  },
  
  // Full-width button styles with reduced height
  fullWidthBtnEditForm: {
    width: '100%', // Makes button take the whole width
    backgroundColor: '#4CAF50', // Green background
    paddingVertical: 10, // Reduced vertical padding (height)
    borderRadius: 10, // Rounded corners
    marginBottom:10,
    alignItems: 'center', // Center the text horizontally
  },
  
  fullWidthBtnAltEditForm: {
    width: '100%', // Same width for consistency
    backgroundColor: '#2196F3', // Blue background
    paddingVertical: 10, // Reduced vertical padding (height)
    borderRadius: 10,
    alignItems: 'center', // Center the text horizontally
  },
  
  footerText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center', // Ensure text is centered
  }
  
  ,addNewCarBtn: {
    width: '100%', // Same width for consistency
    backgroundColor: '#2196F3', // Blue background
    paddingVertical: 10, // Reduced vertical padding (height)
    borderRadius: 10,
    alignItems: 'center', // Center the text horizontally
  },
  
  addNewCarText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center', // Ensure text is centered
  },
  footerButtons: {
    width: '100%',
    flexDirection: 'row', // Align buttons in a row
    justifyContent: 'space-between', // Space out buttons evenly
    gap: 10, // Space between the buttons
    alignItems: 'center', // Vertically center the buttons
    marginTop: 20, // Some margin from the top
  },
  
  addNewCarBtn: {
    flex: 1, // Makes the button expand to take available space
    backgroundColor: '#388E3C', // Green color
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 5,
  },
  
  addNewCarText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '700',
    textAlign: 'center',
    
  },
  
  closeBtn: {
    backgroundColor: '#F44336', // Red background for the close button
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '30%', // Specific width for the close button
  },
  
  footerText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  footerButtonsEdit: {
    marginTop: 20,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  fullWidthBtnEditForm: {
    backgroundColor: '#388E3C', // Green for Update
    paddingVertical: 14,
    borderRadius: 8,
    marginBottom: 12,
    alignItems: 'center',
  },
  fullWidthBtnAltEditForm: {
    backgroundColor: '#1976D2', // Blue for Save
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    
  },
  footerText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '300',
    textAlign: 'center',
  },
  
  footerButtonsEdit: {
    marginTop: 20,
    flexDirection: 'row', // This ensures buttons are in a row
    justifyContent: 'space-between', // Add spacing between buttons
    gap: 15, // Optional, if you want to add space between the buttons
  },
  fullWidthBtnEditForm: {
  backgroundColor: '#388E3C', // Green for Update
  paddingVertical: 12,
  paddingHorizontal:12,
 
  borderRadius: 8,
  flex: 1,              // This makes button expand to fill available space equally
  alignItems: 'center',
},

 
  footerText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
  },

    overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '88%',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 24,
    elevation: 6,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
  },
  header: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 20,
    color: '#1f2937',
    textAlign: 'center',
  },
  formGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 15,
    color: '#374151',
    marginBottom: 6,
  },
  input: {
    height: 44,
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 10,
    paddingHorizontal: 12,
    backgroundColor: '#f9fafb',
    fontSize: 15,
    color: '#111827',
  },
  footerButtonsEdit: {
    marginTop: 24,
    gap: 12,
  },
  fullWidthBtnEditForm: {
    backgroundColor: '#4CAF50',
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },

 input: {
    height: 44,
    backgroundColor: '#f9fafb',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    paddingHorizontal: 12,
    fontSize: 15,
    color: '#111827',
  },
  footerButtonsEdit: {
    flexDirection: 'column',
    gap: 12,
    marginTop: 12,
  },
  fullWidthBtnEditForm: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#fff',
  },
  
});

// Styles for the component
const login = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  container: {
    width: '85%',
    backgroundColor: '#ffffffdd',
    borderRadius: 12,
    padding: 28,
    shadowColor: '#00000030',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  header: {
    fontSize: 26,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 30,
    textAlign: 'center',
  },
  input: {
    height: 48,
    borderColor: '#d1d5db',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 16,
    borderRadius: 8,
    fontSize: 16,
    color: '#111827',
    backgroundColor: '#f9fafb',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#d1d5db',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    backgroundColor: '#f9fafb',
    height: 48,
    marginBottom: 25,
  },
  passwordInput: {
    flex: 1,
    fontSize: 16,
    color: '#111827',
  },
  button: {
    backgroundColor: '#008033',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 17,
    color: '#ffffff',
    fontWeight: '600',
  },
  errorText: {
    color: '#b91c1c',
    marginBottom: 18,
    textAlign: 'center',
    fontWeight: '500',
  },
  adminLink: {
    fontSize: 15,
    color: '#2563eb',
    fontWeight: '500',
    textAlign: 'center',
    marginTop: 12,
    textDecorationLine: 'underline',
  },
});



const modernStyles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  
  buttonText: {
  color: '#fff',             // jasně bílý text
  fontWeight: '600',
  fontSize: 16,
},


  stepControls: {
  flexDirection: 'row',
  justifyContent: 'flex-end',  // tlačítko zarovnané doprava
  alignItems: 'center',
  marginTop: 24,
},


button: {
  paddingVertical: 12,
  paddingHorizontal: 20,
  borderRadius: 8,
  alignItems: 'center',
},

buttonPrimary: {
  backgroundColor: '#2E7D32',
},

buttonText: {
  color: '#fff',
  fontWeight: '600',
  fontSize: 16,
},

    pickerWrapper: {
      height:40,
    marginTop: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#fff',
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    elevation: 2, // Android stín
  },
   pickerWrapper: {
    marginTop: 12,
    marginBottom: 12,
    paddingHorizontal: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#fff',
    height: 100,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    
  },
  
  
  container: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    paddingTop: 50,       // <-- přidá prostor nahoře pro X
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 10,
  },
  
  closeButton: {
    position: 'absolute',
    top: 12,              // trochu dál od horního okraje
    right: 12,
    backgroundColor: '#eee',
    borderRadius: 20,
    width: 36,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  
  title: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 20,
    textAlign: 'center',
    color: '#222',
    // marginTop: 10,   // můžeš upravit pokud chceš víc mezery pod X
  },

  stepIndicator: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
    gap: 8,
  },
  stepDot: {
    width: 10,
    height: 10,
    backgroundColor: '#ccc',
    borderRadius: 5,
  },
  activeDot: {
    backgroundColor: '#2563eb',
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    color: '#374151',
    marginTop: 10,
    marginBottom: 6,
  },
  input: {
    backgroundColor: '#f1f5f9',
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 16,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#cbd5e1',
    color: '#0f172a',
  },
  inputText: {
    fontSize: 16,
    color: '#0f172a',
  },
  countControl: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    backgroundColor: '#e2e8f0',
    borderRadius: 12,
    overflow: 'hidden',
  },
  countBtn: {
    padding: 14,
    backgroundColor: '#cbd5e1',
  },
  countText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2563eb',
  },
  amountInput: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    backgroundColor: '#fff',
    color: '#1e293b',
  },
  button: {
    backgroundColor: '#2563eb',
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  secondary: {
    backgroundColor: '#6b7280',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    gap: 10,
  },
  picker: {
    height: 10,              // 50 je většinou dostatečné, 100 je docela vysoké
    width: '100%',           // aby zabíral celou šířku kontejneru
    color: '#111',           // barva textu vybraného
    backgroundColor: '#f0f0f0',  // světle šedé pozadí pro hezčí look
    borderRadius: 8,
    paddingHorizontal: 10,
  },
    
  row: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 6,
    marginTop: 12,
  },
  pickerWrapper: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#f9f9f9',
    marginBottom: 12,
  },
  picker: {
    height: 44,
    color: '#111',
    paddingHorizontal: 8,
  },
  amountInput: {
    height: 44,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 16,
    backgroundColor: '#fff',
    color: '#111',
    marginBottom: 12,
  },
   pickerWrapperDrevina: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 16,
    justifyContent: 'center',
  },
  pickerDrevina: {
    height: 50,
    color: '#111',
  },
  pickerWrapperSortiment: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 16,
    justifyContent: 'center',
  },
  pickerSortiment: {
    height: 50,
    color: '#111',
  },
  stepControls: {
  flexDirection: 'row',
  justifyContent: 'space-between',  // mezi nimi mezera
  alignItems: 'center',
  gap: 12,                          // React Native >=0.71 podporuje gap, jinak použij margin
  marginTop: 24,
},

button: {
  flex: 1,                          // obě tlačítka zabírají stejnou šířku
  paddingVertical: 12,
  paddingHorizontal: 20,
  borderRadius: 8,
  alignItems: 'center',
},

buttonPrimary: {
  backgroundColor: '#2E7D32',
},

buttonSecondary: {
  backgroundColor: '#ccc',
},

buttonText: {
  color: '#fff',
  fontWeight: '600',
  fontSize: 16,
},
text:{
  color:"#fff"
},
 label: {
    fontSize: 16,
    fontWeight: '700',
    color: '#222',
    marginTop: 20,
    marginBottom: 5,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    elevation: 3,
    marginBottom: 10,
  },
  inputText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#f9f9f9',
    borderRadius: 12,
    padding: 12,
    fontSize: 16,
    color: '#333',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  
  
  secondaryText: {
    color: '#222',
  },
 btnText: {
  flex:1,
  backgroundColor: '#2E7D32',
  color:"#ffffff",
  paddingVertical: 10,
  paddingHorizontal: 10,
  borderRadius: 8,
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: 16,
  
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.2,
  shadowRadius: 4,
  elevation: 3,
},
st:{
  paddingVertical: 10,
  paddingHorizontal: 10,
  borderRadius: 8,
  alignItems: 'center',
  justifyContent: 'center',
   
},

btnDisabled: {
  backgroundColor: '#2E7D32',
},

btnLabel: {
  color: '#fff',
  fontSize: 16,
  fontWeight: 'bold',
},
 buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },

  secondaryText: {
    color: '#333',
  },
  btnSubmit: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
   button: {
    flex: 1,
    paddingVertical: 12,
    backgroundColor: '#2E7D32', // modrá pro hlavní akce
    borderRadius: 8,
    alignItems: 'center',
  },
  stForeColor:{
   backgroundColor: '#2E7D32',
  color:"#ffffff",
  paddingVertical: 10,
  paddingHorizontal: 10,
  fontSize:15,
  borderRadius: 8,
  alignItems: 'center',
  textAlign:"center",
  justifyContent: 'center',
  marginTop: 16,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.2,
  shadowRadius: 4,
  elevation: 3,
  width:"100%"
  }

});


export { styles, map,carsStyles,edittedOneForm,aboutStyles,stylesUsers,formStyles,s,stylesForm,modernStyles,personProfile,login };