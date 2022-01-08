import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View,Image,ScrollView,ImageBackground } from 'react-native';
import logo from './assets/logo.png';
import leafb from './assets/leafb.jpg';
import { Ionicons,MaterialIcons,Entypo,Fontisto,Feather,AntDesign } from '@expo/vector-icons';
import { SliderBox } from "react-native-image-slider-box";
import axios from "axios";
import abp from './assets/abp.png';
import aajtak from './assets/aajtak.png';
import cnn from './assets/cnn.png';
import sony from './assets/sony.png';
import tej from './assets/tej.png';
import zee from './assets/zee.png';
import Media from './Media/Media'



export default function App() {

  const [disease, setDisease] = useState('') ;
  const [diseaseDescription,setDiseaseDescription] = useState('') ;
  const [drug, setDrug] = useState({}) ;


  let images = [
    require('./assets/image1.jpg'),
    require('./assets/image0.jpg'),
  ]

  

  const request = async () => {

    try {

      const options = {
        method: 'GET',
        url: 'https://disease-detection.p.rapidapi.com/disease_list/',
        headers: {
          'x-rapidapi-host': 'disease-detection.p.rapidapi.com',
          'x-rapidapi-key': '8847034357msh335e1e50301af07p147289jsn6da94574621e'
        }
      };
    
     const diseases = await axios.request(options) ;
  //  console.log(diseases.data[random]);
    // console.log(diseases.data.length);
   let random = Math.floor(Math.random() * diseases.data.length);
  //  console.log(random);
   setDisease(diseases.data[1]);

  } catch(e) {
     console.log(e);
   }

   try {
    const description = {
      method: 'GET',
      url: `https://disease-detection.p.rapidapi.com/disease_description/${disease}`,
      headers: {
        'x-rapidapi-host': 'disease-detection.p.rapidapi.com',
        'x-rapidapi-key': '8847034357msh335e1e50301af07p147289jsn6da94574621e'
      }
    };
    
    const desc = await axios.request(description) ;
    // console.log(desc.data);
    setDiseaseDescription(desc.data);
    
   } catch (error) {
     console.log(error);
   }
    
   try {
    const product = {
      method: 'GET',
      url: 'https://dailyvita-natural-products.p.rapidapi.com/',
      params: {search: 'bio'},
      headers: {
        'x-rapidapi-host': 'dailyvita-natural-products.p.rapidapi.com',
        'x-rapidapi-key': '8847034357msh335e1e50301af07p147289jsn6da94574621e'
      }
    };
    
    const drugs = await axios.request(product) ;
    // console.log(drugs.data[0].title) ;
    console.log(drugs.data[0].price);
    setDrug(drugs.data[0]) ;
   } catch (err) {
     console.log(err);
   }

 }

request();

  return (
    <>
    <View style={styles.container}>
             <Image source={logo}
                   style={styles.logo}
                />
             <Ionicons name="reorder-three-sharp" size={31} color="#006633" style={styles.icon} />
      <StatusBar style="auto" /> 
    </View>
        
    <ScrollView style={styles.scrollview}> 
       <Text style={{color:'#009999', fontSize:20,marginLeft:25,marginTop:25}}>Hello there,</Text>
       <Text style={{color:'#009999', fontSize:16,marginLeft:25}}>how can we serve you today...</Text>

      <SliderBox images={images} dotColor="#006633"
                 inactiveDotColor="#90A4AE"
                 ImageComponentStyle={{borderRadius: 25, width: '85%', marginTop: 40, }} /> 

      <View style={{display: 'flex', flexDirection: 'row',flexWrap: 'wrap'}}> 

      <View style={{backgroundColor:'#009999', height:120,width:'28%',borderRadius:25,marginLeft:20,marginTop:35}}>
         <MaterialIcons name="format-list-numbered" size={32} color="white" style={{alignSelf:'center', marginTop:20}} />
         <Text style={{color:'white',fontSize:14,alignSelf:'center',marginTop:20}}>My Orders</Text>
      </View>

      <View style={{backgroundColor:'#009999', height:120,width:'28%',borderRadius:25,marginLeft:15,marginTop:35}}>
             <Entypo name="location" size={32} color="white" style={{alignSelf:'center', marginTop:20}} />
         <Text style={{color:'white',fontSize:14,alignSelf:'center',marginTop:20}}>Track Orders</Text>
      </View>

      <View style={{backgroundColor:'#009999', height:120,width:'28%',borderRadius:25,marginLeft:15,marginTop:35}}>
         <MaterialIcons name="wallet-giftcard" size={32} color="white" style={{alignSelf:'center', marginTop:20}} />
         <Text style={{color:'white',fontSize:14,alignSelf:'center',marginTop:20}}>Best Offers</Text>
            
      </View>

      <View style={{backgroundColor:'#009999', height:120,width:'28%',borderRadius:25,marginLeft:20,marginTop:20}}>
      <Ionicons name="chatbubbles-outline" size={32} color="white" style={{alignSelf:'center', marginTop:20}} />
         <Text style={{color:'white',fontSize:14,alignSelf:'center',marginTop:20}}>Chat</Text>
              
      </View>

      <View style={{backgroundColor:'#009999', height:120,width:'28%',borderRadius:25,marginLeft:15,marginTop:20}}>
      <Fontisto name="bed-patient" size={32} color="white" style={{alignSelf:'center', marginTop:20}} />
         <Text style={{color:'white',fontSize:14,alignSelf:'center',marginTop:20}}>Refer Patient</Text>
             
      </View>

      <View style={{backgroundColor:'#009999', height:120,width:'28%',borderRadius:25,marginLeft:15,marginTop:20}}>
      <Ionicons name="wallet-outline" size={32} color="white" style={{alignSelf:'center', marginTop:20}} />
         <Text style={{color:'white',fontSize:14,alignSelf:'center',marginTop:20}}>Payment</Text>
              
      </View>

      </View>

      <View style={{display: 'flex', flexDirection: 'row'}}> 
      <Text style={{fontWeight:'bold',fontSize:17,marginTop:35,marginLeft:25}}>Categories</Text>
      <Text style={{fontWeight:'bold',fontSize:17,marginTop:35,marginLeft:195,color:'#009999'}}>View All</Text>
      </View>

      {/* <Text>{disease}</Text>
      <Text>{diseaseDescription}</Text> */}
      {/* <Display heading={disease} description={diseaseDescription} /> */}
      <ImageBackground source={leafb} resizeMode='cover' style={styles.image} >
              <Text style={{color:'#000',alignSelf:'center',fontWeight:'bold',margin:7,fontSize:15}}>{disease}</Text>
              <Text style={{fontSize:14}}>{diseaseDescription}</Text>
              <Text style={{color:'#009999',alignSelf:'center',fontWeight:'bold',fontSize:15,margin:5}}>EXPLORE </Text>
          </ImageBackground>


      <Text style={{fontWeight:'bold',fontSize:17,marginTop:35,marginLeft:25}}>Featured Products</Text>

      <ImageBackground source={leafb} resizeMode='cover' style={styles.image} >
              {/* <Image source={{uri : {drug.image}}} /> */}
              <Text style={{color:'#000',alignSelf:'center',fontWeight:'bold',margin:7,fontSize:15}}>{drug.title}</Text>
              <Text style={{fontSize:14,alignSelf:'center'}}>Buy {drug.name} at {drug.price}</Text>
              <Text style={{color:'#009999',alignSelf:'center',fontWeight:'bold',fontSize:15,margin:5,marginTop:40}}>Add To Cart</Text>
              <Text style={{color:'#009999',alignSelf:'center',fontWeight:'bold',fontSize:15,margin:5}}>EXPLORE MORE </Text>

          </ImageBackground>

          <Text style={{fontWeight:'bold',fontSize:17,marginTop:35,marginLeft:25}}>Most purchased products</Text>
           
          <ImageBackground source={leafb} resizeMode='cover' style={styles.image} >
              <Image source={drug.image} />
              <Text style={{color:'#000',alignSelf:'center',fontWeight:'bold',margin:7,fontSize:15}}>{drug.title}</Text>
              <Text style={{fontSize:14,alignSelf:'center'}}>Buy {drug.name} at {drug.price}</Text>
              <Text style={{color:'#009999',alignSelf:'center',fontWeight:'bold',fontSize:15,margin:5,marginTop:40}}>Add To Cart</Text>
              <Text style={{color:'#009999',alignSelf:'center',fontWeight:'bold',fontSize:15,margin:5}}>EXPLORE MORE </Text>

          </ImageBackground>

          <Text style={{fontWeight:'bold',fontSize:17,marginTop:35,marginLeft:25}}>Our Media Associates</Text>

          <View style={{display: 'flex', flexDirection: 'row',flexWrap: 'wrap'}}>

                       <Media imageUri={abp} />
                       <Media imageUri={aajtak} />
                       <Media imageUri={cnn} />
                       <Media imageUri={zee} />
                       <Media imageUri={sony} />
                       <Media imageUri={tej} />
         </View>


         <Text style={{marginTop:50,marginLeft:60,fontWeight:'bold',fontSize:12}}>ND Care Nirogam Pvt. Ltd. - All Rights Reserved</Text>
    
    </ScrollView>
      
    </>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.15,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 1 },
    // shadowOpacity: 0.8,
    // shadowRadius: 1, 
    elevation:25
  },
  logo : {
    position: 'absolute',
    left:20,
    bottom:0,
    top:10,
    // flex:1,
    width: 120,
    height: 120,
    resizeMode: 'contain',
    
  } ,
  icon : {
    position: 'absolute',
    right:20,
    bottom:28,
    width:30,
    
    justifyContent:'center',
    alignItems: 'center'
  },

  scrollview : {
    flex:0.85,
    backgroundColor:'#fff'
  },

  image:{
    opacity:0.8,
    borderRadius:20,
    height:200,
    width:'97%',
    margin:16,
    padding:5,
}
});
