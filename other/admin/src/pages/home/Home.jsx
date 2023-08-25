import "./home.css";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo"
import Chart from "../../components/chart/Chart";
import {userData} from "../../dummyData";
import WidgetLrg from "../../components/widgetLrg/WidgetLrg";
import WidgetSml from "../../components/widgetSml/WidgetSml";

const Home = () => {
  return (
    <div className="home">
      <FeaturedInfo/>
      <Chart data={userData} title="User Analytics" grid dataKey="Active User" />
      <div className="hoemWidgets">
        <WidgetSml/>
        <WidgetLrg/>
      </div>
    </div>
  )
}

export default Home
