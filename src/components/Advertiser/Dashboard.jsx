import { motion } from "framer-motion";
import { Bar, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const Dashboard = () => {
  const adData = [
    {
      title: "Summer Sale Campaign",
      description: "Boost your sales with our summer sale campaign.",
      CTR: "5.8%",
      conversions: "120",
      platform: "Facebook",
    },
    {
      title: "Holiday Discounts",
      description: "Attract more customers with exclusive holiday discounts.",
      CTR: "7.2%",
      conversions: "85",
      platform: "Instagram",
    },
    {
      title: "New Product Launch",
      description: "Promote your new product to the right audience.",
      CTR: "6.1%",
      conversions: "150",
      platform: "Google",
    },
    {
      title: "Back-to-School Offers",
      description: "Increase your reach with back-to-school offers.",
      CTR: "4.9%",
      conversions: "97",
      platform: "Twitter",
    },
  ];
  const barData = {
    labels: ["Ad 1", "Ad 2", "Ad 3", "Ad 4"],
    datasets: [
      {
        label: "Clicks",
        data: [120, 190, 300, 250],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
      {
        label: "Impressions",
        data: [1500, 2300, 2000, 1800],
        backgroundColor: "rgba(153, 102, 255, 0.2)",
        borderColor: "rgba(153, 102, 255, 1)",
        borderWidth: 1,
      },
    ],
  };

  const doughnutData = {
    labels: ["Facebook", "Google", "Instagram", "Twitter"],
    datasets: [
      {
        label: "# of Ads",
        data: [300, 500, 200, 100],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="flex flex-1 p-4">
      <div className="bg-white dark:bg-gray-200 p-4 rounded-lg shadow-lg w-full min-h-screen h-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <h1 className="text-2xl font-bold text-gray-800">
            Advertiser Dashboard
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-300 p-4 rounded-lg"
          >
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              Ad Performance
            </h2>
            <Bar data={barData} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-300 p-4 rounded-lg"
          >
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              Platform Distribution
            </h2>
            <Doughnut data={doughnutData} />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-6"
        >
          <div className="bg-gray-300 p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
              Recent Ad Listings
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {adData.map((ad, i) => (
                <div
                  key={i}
                  className="bg-gray-800 p-4 rounded-lg shadow-lg"
                >
                  <h3 className="font-semibold text-gray-800 dark:text-white">
                    {ad.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">
                    {ad.description}
                  </p>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-sm text-gray-800 dark:text-gray-400">
                      <strong>CTR:</strong> {ad.CTR}
                    </span>
                    <span className="text-sm text-gray-800 dark:text-gray-400">
                      <strong>Conversions:</strong> {ad.conversions}
                    </span>
                    <span className="text-sm text-gray-800 dark:text-gray-400">
                      <strong>Platform:</strong> {ad.platform}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;
