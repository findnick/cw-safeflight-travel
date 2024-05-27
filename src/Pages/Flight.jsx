import CardSection from "../Components/Common/CardSection";
import Footer from "../Components/Common/Footer";
import General from "../Components/Common/General";
import Header from "../Components/Common/Header";
import Navbar from "../Components/Common/Navbar";
import Questions from "../Components/Common/Questions";
import header_img from "../assets/img/header-images/header-img-1.jpg";
import card_1 from "../assets/img/other-cards/flight-card-1.jpg";
import card_2 from "../assets/img/other-cards/flight-card-2.jpg";
import card_3 from "../assets/img/other-cards/flight-card-3.jpg";
import card_4 from "../assets/img/other-cards/flight-card-4.jpg";
import temp from "../assets/img/flight-temp.png";

const Flight = () => {
  const cards = [
    {
      heading: "Lorem ipsum",
      text: "Lorem ipsum dolor sit amet consectetur.",
      img: card_1,
    },
    {
      heading: "Lorem ipsum",
      text: "Lorem ipsum dolor sit amet consectetur.",
      img: card_2,
    },
    {
      heading: "Lorem ipsum",
      text: "Lorem ipsum dolor sit amet consectetur.",
      img: card_3,
    },
    {
      heading: "Lorem ipsum",
      text: "Lorem ipsum dolor sit amet consectetur.",
      img: card_4,
    },
  ];
  const questions = [
    {
      question: "Lorem ipsum dolor sit amet consectetur?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. In arcu gravida ut libero donec maecenas. Viverra volutpat nulla nisi tortor tortor elementum. Magna in semper egestas et ut nunc a posuere. Vulputate vitae placerat dui porttitor interdum condimentum morbi id magna in semper egestas et ut libero donec maecenas.",
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. In arcu gravida ut libero donec maecenas. Viverra volutpat nulla nisi tortor tortor elementum. Magna in semper egestas et ut nunc a posuere. Vulputate vitae placerat dui porttitor interdum condimentum morbi id magna in semper egestas et ut libero donec maecenas.",
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. In arcu gravida ut libero donec maecenas. Viverra volutpat nulla nisi tortor tortor elementum. Magna in semper egestas et ut nunc a posuere. Vulputate vitae placerat dui porttitor interdum condimentum morbi id magna in semper egestas et ut libero donec maecenas.",
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. In arcu gravida ut libero donec maecenas. Viverra volutpat nulla nisi tortor tortor elementum. Magna in semper egestas et ut nunc a posuere. Vulputate vitae placerat dui porttitor interdum condimentum morbi id magna in semper egestas et ut libero donec maecenas.",
    },
  ];
  return (
    <>
      <Navbar />
      <Header
        headingStart="The best flight deals"
        headingEnd="from anywhere, to everywhere"
        para="Lorem ipsum dolor sit amet consectetur. Nisl ultrices et eleifend proin quisque feugiat."
        img={header_img}
      ></Header>
      <CardSection cards={cards} />
      <img src={temp} alt="" />
      <General
        img={card_4}
        btnText="Book now"
        heading="Lorem ipsum dolor sit amet consectetur ac quis sed."
        para="Lorem ipsum dolor sit amet consectetur. Nisl ultrices et eleifend proin quisque feugiat."
      />
      <Questions questions={questions} />
      <Footer />
    </>
  );
};

export default Flight;
