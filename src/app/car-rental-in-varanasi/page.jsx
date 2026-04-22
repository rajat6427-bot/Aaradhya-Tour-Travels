import Any from "../../../components/Any"
import Last from "../../../components/Last";
import Footer from "../../../components/Footer";
import NavContainer from "../../../components/NavContainer";
import CarRentalSeoContent from "../../../components/CarRentalSeoContent";

export const metadata = {
  title: "Car Rental in Varanasi | Affordable Cab Booking - Aaradhya Tours & Travels",
  description:
    "Book the best car rental in Varanasi with Aaradhya Tours & Travels. Affordable prices, clean cars, professional drivers for local, airport & outstation travel.",
};

export default function Page() {
  return (<>
  <header>
    <NavContainer/>
  </header>
    <main>
      <CarRentalSeoContent/>

      <Any />

      <Last />
      <Footer />
    </main>
    </>
  );
}