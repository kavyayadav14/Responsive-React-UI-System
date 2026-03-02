import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

const App = () => {

  const users = [
    { 
      img: 'https://plus.unsplash.com/premium_photo-1671305206683-44ee2fd50a48?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2Zlc3Npb25hbCUyMHdvbWFufGVufDB8fDB8fHww',
      intro:'',
      color:'blue',
      tag:'Topformance'
    },
    {
      img: 'https://thumbs.dreamstime.com/b/asian-smart-woman-working-computer-work-space-cafe-asian-smart-woman-working-computer-work-space-cafe-213976029.jpg',
      intro:'',
       color:'orange',
      tag:'Satisfied'
    }, 
    {
      img: 'https://s3.envato.com/files/430614394/FP_DSC07313.jpg',
      intro:'',
      color:'royalblue',
      tag:'Underserved'
    },
     { 
      img: 'https://www.apexsystems.com/sites/default/files/media-images/Year%20Up_Side%20Image%20(1).png',
      intro:'',
      color:'pink',
      tag:'senior Developer'
    },
    { 
      img: 'https://fintua.com/wp-content/uploads/2024/01/2024-Blog-Covers-1.png',
      intro:'',
      color:'black',
      tag:'Average'
    }
  ]
  return (
    <div>
      <Section1 users={users}/>
       <Section2/>
     

    </div>
  )
}

export default App
