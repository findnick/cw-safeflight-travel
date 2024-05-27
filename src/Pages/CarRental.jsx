import CardSection from "../Components/Common/CardSection";
import Footer from "../Components/Common/Footer";
import General from "../Components/Common/General";
import Header from "../Components/Common/Header";
import Navbar from "../Components/Common/Navbar";
import Questions from "../Components/Common/Questions";
import header_img from "../assets/img/header-images/header-img-3.jpg";
import card_1 from "../assets/img/other-cards/flight-card-1.jpg";
import card_2 from "../assets/img/other-cards/flight-card-2.jpg";
import card_3 from "../assets/img/other-cards/flight-card-3.jpg";
import card_4 from "../assets/img/other-cards/flight-card-4.jpg";
import main_1 from "../assets/img/car-rental/car-main-1.jpg";
import main_2 from "../assets/img/car-rental/car-main-2.jpg";
import main_3 from "../assets/img/car-rental/car-main-3.jpg";

const CarRental = () => {
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
  const main = [
    {
      img: main_1,
      area: "Toronto",
      country: "Canada",
      cost: "80",
    },
    {
      img: main_2,
      area: "New York",
      country: "United States",
      cost: "110",
    },
    {
      img: main_3,
      area: "Vancouver",
      country: "Canada",
      cost: "70",
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
      <div className="car-rental-main flex flex-row justify-around mx-10">
        {main.map((ele, index) => {
          return (
            <div
              key={index}
              className="card flex flex-col overflow-hidden"
              style={{ width: "30%" }}
            >
              <div
                className="car-rental-card-image overflow-hidden"
                style={{ height: "200px" }}
              >
                <img src={ele.img} alt="" />
              </div>
              <div className="car-rental-details p-3 flex flex-row justify-between">
                <div className="flex flex-col">
                  <p className="font-medium text-xl text-black">
                    Car rental in {ele.area}
                  </p>
                  <p
                    className="font-normal text-sm"
                    style={{ color: "var(--text-100)" }}
                  >
                    {ele.country}
                  </p>
                </div>
                <div className="flex flex-col">
                  <p
                    className="font-normal text-sm"
                    style={{ color: "var(--text-100)" }}
                  >
                    From
                  </p>
                  <p className="font-bold text-xl text-black">C${ele.cost}</p>
                  <p
                    className="font-normal text-sm"
                    style={{ color: "var(--text-100)" }}
                  >
                    Per Day
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
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

export default CarRental;
