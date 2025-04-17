function parseUplink(device, payload)
{
    // Obtener payload como JSON
    const jsonPayload = payload.asJsonObject();
    Object.keys(jsonPayload).forEach(function(key){
        env.log(key,jsonPayload[key])
    })

    // No se puede deserializar el payload como json, salir.
    if (!jsonPayload) { return; }

    // Procesar JSON de EZE GEN1 (hasta 200 registros por sensor por call)


    //----------------------------------------------------------------------------------------------------------------------------
    //----------------------------------------------------------------------------------------------------------------------------


  

        //variables SW Planta base agua ABAJO
        var est1 = device.endpoints.byAddress(1);
        var est2 = device.endpoints.byAddress(2);
        var est3 = device.endpoints.byAddress(3);
        var est4 = device.endpoints.byAddress(4);
        var est5 = device.endpoints.byAddress(5);
        var est6 = device.endpoints.byAddress(6);
        var est7 = device.endpoints.byAddress(7);
        var est8 = device.endpoints.byAddress(8);
        var est9 = device.endpoints.byAddress(9);
        var est10 = device.endpoints.byAddress(10.1);
        var est11 = device.endpoints.byAddress(11.1);
        var est12 = device.endpoints.byAddress(12);
        var est13 = device.endpoints.byAddress(13);
        var est14 = device.endpoints.byAddress(14);
        var est15 = device.endpoints.byAddress(15);
        var est16 = device.endpoints.byAddress(16);
        var est17 = device.endpoints.byAddress(17);
        var est18 = device.endpoints.byAddress(18);
        var est19 = device.endpoints.byAddress(19);
        var est20 = device.endpoints.byAddress(20);
        var est21 = device.endpoints.byAddress(21);
        var est22 = device.endpoints.byAddress(22);
        var est23 = device.endpoints.byAddress(23);
        var est24 = device.endpoints.byAddress(24);
        var est25 = device.endpoints.byAddress(25);
        var est26 = device.endpoints.byAddress(26);
        var est27 = device.endpoints.byAddress(27);
        
        
        

        var tiempoUnix = jsonPayload.timestamp;
        var fecha = new Date(tiempoUnix * 1000);
        var timestamp = fecha.toISOString();
        env.log("LA FECHA ES ----->   ",timestamp);

        
        



       
        
 

/*-------------------------------------------------------------------------------------------------------------------

SCRIPT SW PLANTA BASE AGUA   SCRIPT SW PLANTA BASE AGUA   SCRIPT SW PLANTA BASE AGUA   SCRIPT SW PLANTA BASE AGUA   

-------------------------------------------------------------------------------------------------------------------*/
// Sentencia NODE-RED Para todos los endpoints


if (jsonPayload.ser == "BBC-191"){
            const datos = jsonPayload;
            env.log("PAYLOAD --> ",datos);
            env.log("Time  --> ",timestamp);

          
            
            

            est1.updateWeightSensorStatus(datos.e1,timestamp);
            env.log("estanque.s1 --> ",datos.e1);
            
            est2.updateWeightSensorStatus(datos.e2,timestamp);
            env.log("   estanque.s2 --> ",datos.e2);

            est3.updateWeightSensorStatus(datos.e3,timestamp);
            env.log("   estanque.s3 --> ",datos.e3);

            est4.updateWeightSensorStatus(datos.e4,timestamp);
            env.log("   estanque.s4 --> ",datos.e4); 

            est5.updateWeightSensorStatus(datos.e5,timestamp);
            env.log("   estanque.s5 --> ",datos.e5); 

            est6.updateWeightSensorStatus(datos.e6,timestamp);
            env.log("   estanque.s6 --> ",datos.e6);

            est7.updateWeightSensorStatus(datos.e7,timestamp);
            env.log("   estanque.s7 --> ",datos.e7);

            est8.updateWeightSensorStatus(datos.e8,timestamp);
            env.log("   estanque.s8 --> ",datos.e8);

            est9.updateWeightSensorStatus(datos.e9,timestamp);
            env.log("   estanque.s9 --> ",datos.e9);

            est10.updateVolumeSensorStatus(datos.r1,timestamp);
            env.log("   estanque.r1 --> ",datos.r1);

            est11.updateVolumeSensorStatus(datos.r2,timestamp);
            env.log("   estanque.r2 --> ",datos.r2);

            est12.updateVolumeSensorStatus(datos.h2o,timestamp);
            env.log("   estanque.h2o --> ",datos.h2o);

            est13.updateWeightSensorStatus(datos.basetex,timestamp);
            env.log("   estanque.basetex --> ",datos.basetex);

            
            //----------------Presion--------------------------------//

            est14.updateGenericSensorStatus(datos.tx1,timestamp);
            env.log("   txpresion.s1 --> ",datos.tx1); 

            est15.updateGenericSensorStatus(datos.tx2,timestamp);
            env.log("   txpresion.s2 --> ",datos.tx2); 

            est16.updateGenericSensorStatus(datos.tx3,timestamp);
            env.log("   txpresion.s3 --> ",datos.tx3);

            est17.updateGenericSensorStatus(datos.tx4,timestamp);
            env.log("  txpresion.s4 --> ",datos.tx4);

            est18.updateGenericSensorStatus(datos.tx5,timestamp);
            env.log("   txpresion.s5 --> ",datos.tx5);

            est19.updateGenericSensorStatus(datos.tx7,timestamp);
            env.log("   txpresion.s7 --> ",datos.tx7);

            est20.updateGenericSensorStatus(datos.tx8,timestamp);
            env.log("   txpresion.s8 --> ",datos.tx8);

            est21.updateGenericSensorStatus(datos.tx9,timestamp);
            env.log("   txpresion.s9 --> ",datos.tx9);
}


if (jsonPayload.ser == "BBC-191-B"){
            const datos = jsonPayload;
            env.log("PAYLOAD --> ",datos);
            env.log("Time  --> ",timestamp);

            //---------------------------LEDDAR-------------------------

            est22.updateGenericSensorStatus(datos.s1,timestamp);
            env.log("   leddar.z1 --> ",datos.s1);

            est23.updateGenericSensorStatus(datos.s2,timestamp);
            env.log("   leddar.z2 --> ",datos.s2);

            est24.updateGenericSensorStatus(datos.s3,timestamp);
            env.log("   leddar.z3 --> ",datos.s3); 

            est25.updateGenericSensorStatus(datos.s4,timestamp);
            env.log("   leddar.z4 --> ",datos.s4); 

            est26.updateGenericSensorStatus(datos.s5,timestamp);
            env.log("   leddar.z5 --> ",datos.s5);

           
}



            
            
             
                                                         
    }



  
