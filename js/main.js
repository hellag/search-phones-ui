const phones =[
  {
    id: 1,
    name: "Phone1",
    description: "Μοντέλο: 2019, Οθόνη: Retina IPS 6.1', Μπαταρία: 3110mAh",
    price: 577.55,
    imgUrl:"../assets/img/Sample-phone.jpg"
  },
  {
    id: 2,
    name: "Phone2",
    description: "Μοντέλο: 2019, Οθόνη: Retina IPS 6.1', Μπαταρία: 3110mAh",
    price: 450.59,
    imgUrl:"../assets/img/Sample-phone.jpg"
  },
  {
    id: 3,
    name: "Phone3",
    description: "Μοντέλο: 2019, Οθόνη: Retina IPS 6.1', Μπαταρία: 3110mAh",
    price: 434.67,
    imgUrl:"../assets/img/Sample-phone.jpg"
  },
  {
    id: 4,
    name: "Phone4",
    description: "Μοντέλο: 2019, Οθόνη: Retina IPS 6.1', Μπαταρία: 3110mAh",
    price: 324.99,
    imgUrl:"../assets/img/Sample-phone.jpg"
  },
  {
    id: 5,
    name: "Phone5",
    description: "Μοντέλο: 2019, Οθόνη: Retina IPS 6.1', Μπαταρία: 3110mAh",
    price: 637.79,
    imgUrl:"../assets/img/Sample-phone.jpg"
  },
  {
    id: 6,
    name: "Phone6",
    description: "Μοντέλο: 2019, Οθόνη: Retina IPS 6.1', Μπαταρία: 3110mAh",
    price: 457.56,
    imgUrl:"../assets/img/Sample-phone.jpg"
  },
  {
    id: 7,
    name: "Phone7",
    description: "Μοντέλο: 2019, Οθόνη: Retina IPS 6.1', Μπαταρία: 3110mAh",
    price: 456.48,
    imgUrl:"../assets/img/Sample-phone.jpg"
  },
  {
    id: 8,
    name: "Phone8",
    description: "Μοντέλο: 2019, Οθόνη: Retina IPS 6.1', Μπαταρία: 3110mAh",
    price: 547.48,
    imgUrl:"../assets/img/Sample-phone.jpg"
  },

]
const phoneContainer=document.getElementById("phone-cards");
const titleContainer=document.getElementById("phone-title");


function getPhones(){
  $( "#phone-cards" ).empty();
  titleContainer.innerText="Κινητά τηλέφωνα ("+ Object.keys(phones).length +" προϊόντα)";

  phones.forEach(element => {
    let phoneContent="<div class='column'>"
    let img="<i class='fa fa-heart-o'></i><img src='"+element.imgUrl+"' >";
    let name="<h5 class='name'>"+element.name+"</h5>"
    let description="<p class='description'>"+element.description+"</p>";
    let price="<span class='price'>"+element.price+"	&euro;</span>";
    phoneContent+=img;
    phoneContent+=name;
    phoneContent+=description;
    phoneContent+=price;
    phoneContent+="</div>";
    phoneContainer.innerHTML+=phoneContent;
  });
}