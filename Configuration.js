function getConfiguration(config)
{
  // Esta función permite indicar valores de configuración generales para 
  // todos los dispositivos de este modelo.
  
  // Dependiendo del significado de la "dirección del dispositivo" en este 
  // dispositivo, es posible que desee cambiar la etiqueta que se utiliza 
  // para hacer referencia a la dirección en la interfaz de usuario.
  // Por ejemplo, si la dirección del dispositivo es en realidad una dirección 
  // MAC, es posible que desee utilizar el código siguiente.
  
  // config.addressLabel = {en: "MAC address", es: "Dirección MAC"};
}

function getEndpoints(deviceAddress, endpoints)
{
  // Esta función le permite indicar la configuración inicial de los endpoints
  // cuando se crea un dispositivo de este modelo. Esto mejora significativamente 
  // la experiencia del usuario final, ya que permite a la plataforma crear 
  // todos los endpoints incluidos en el dispositivo automáticamente cuando se 
  // crea el dispositivo.

  // En el código siguiente, se crean dos endpoints. El primero es un sensor de 
  // temperatura, mientras que el segundo es un sensor de dióxido de carbono.

    endpoints.addEndpoint("1", "estanque.s1", endpointType.weightSensor);
    endpoints.addEndpoint("2", "estanque.s2", endpointType.weightSensor);
    endpoints.addEndpoint("3", "estanque.s3", endpointType.weightSensor);
    endpoints.addEndpoint("4", "estanque.s4", endpointType.weightSensor);
    endpoints.addEndpoint("5", "estanque.s5", endpointType.weightSensor);
    endpoints.addEndpoint("6", "estanque.s6", endpointType.weightSensor);
    endpoints.addEndpoint("7", "estanque.s7", endpointType.weightSensor);
    endpoints.addEndpoint("8", "estanque.s8", endpointType.weightSensor);
    endpoints.addEndpoint("9", "estanque.s9", endpointType.weightSensor);
    endpoints.addEndpoint("10", "estanque.r1", endpointType.weightSensor);
    endpoints.addEndpoint("11", "estanque.r2", endpointType.weightSensor);
    endpoints.addEndpoint("12", "estanque.h2o", endpointType.volumeSensor);
    endpoints.addEndpoint("13", "estanque.basetex", endpointType.weightSensor);
    endpoints.addEndpoint("14", "txpresion.s1", endpointType.genericSensor).variableTypeId = 1019;
    endpoints.addEndpoint("15", "txpresion.s2", endpointType.genericSensor).variableTypeId = 1019;
    endpoints.addEndpoint("16", "txpresion.s3", endpointType.genericSensor).variableTypeId = 1019;
    endpoints.addEndpoint("17", "txpresion.s4", endpointType.genericSensor).variableTypeId = 1019;
    endpoints.addEndpoint("18", "txpresion.s5", endpointType.genericSensor).variableTypeId = 1019;
    endpoints.addEndpoint("19", "txpresion.s7", endpointType.genericSensor).variableTypeId = 1019;
    endpoints.addEndpoint("20", "txpresion.s8", endpointType.genericSensor).variableTypeId = 1019;
    endpoints.addEndpoint("21", "txpresion.s9", endpointType.genericSensor).variableTypeId = 1019;
    endpoints.addEndpoint("22", "leddar.z1", endpointType.genericSensor).variableTypeId = 1017;
    endpoints.addEndpoint("23", "leddar.z2", endpointType.genericSensor).variableTypeId = 1017;
    endpoints.addEndpoint("24", "leddar.z3", endpointType.genericSensor).variableTypeId = 1017;
    endpoints.addEndpoint("25", "leddar.z4", endpointType.genericSensor).variableTypeId = 1017;
    endpoints.addEndpoint("26", "leddar.z5", endpointType.genericSensor).variableTypeId = 1017;
    endpoints.addEndpoint("27", "valvula.v1", endpointType.genericSensor).variableTypeId = 1018;
   
    
    
  // endpoints.addEndpoint("2", "CO2 sensor", endpointType.ppmConcentrationSensor, ppmConcentrationSensorSubType.carbonDioxide);
}

function validateDeviceAddress(address, result)
{
  // Esta función permite validar la dirección de un dispositivo, cuando el usuario 
  // lo está creando. Si el dispositivo tiene reglas de validación especiales para 
  // la dirección, pueden verificarse aquí y devolver un mensaje de error en 
  // caso de que el formato de la dirección sea incorrecto.
  
  // En el código siguiente, se realiza una validación para asegurarse de que la 
  // dirección tiene exactamente 10 caracteres.
  
  // if (address.length != 10) {
  //   result.ok = false;
  //   result.errorMessage = {
  //     en: "The address must be 10 characters long", 
  //     es: "La dirección debe tener exactamente 10 caracteres"
  //   };
  // }
}

function updateDeviceUIRules(device, rules)
{
  // Esta función permite especificar reglas de interfaz de usuario en el nivel de 
  // dispositivo. Por ejemplo, es posible habilitar o deshabilitar la creación 
  // de endpoints manualmente al dispositivo después de que se creó.

  // En el código siguiente, el agregado manual de endpoints está deshabilitada 
  // en la interfaz de usuario. Esto significa que el dispositivo se limitará a los 
  // endpoints definidos por la función getEndpoints() anterior.
  
rules.canCreateEndpoints = true;
}

function updateEndpointUIRules(endpoint, rules)
{
  // Esta función permite especificar reglas de interfaz de usuario para cada
  // endpoint del dispositivo. Por ejemplo, es posible habilitar o inhabilitar la
  // eliminación de endpoints, o la edición de subtipo de endpoint.

  // En el código siguiente, se definen las siguientes reglas:
  // - Los endpoints no se pueden eliminar.
  // - El subtipo de endpoint se puede cambiar, pero solo para el segundo endpoint.
  
   rules.canDelete = true;
  // rules.canEditSubType = (endpoint.address == "2");
}
