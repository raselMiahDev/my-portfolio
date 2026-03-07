import { 
  FaCalendarAlt, 
  FaTshirt,
  FaBoxes,
  FaClipboardList,
  FaTruck,
  FaChartLine,
  FaUsers,
  FaAward,
  FaCheckCircle,
  FaWarehouse
} from 'react-icons/fa';
import { BiStore } from 'react-icons/bi';


export const experiences = [
    {
      id: 1,
      title: "Store Incharge",
      company: "Tulip Commodities",
      location: "Jashore, Khulna, Bangladesh",
      period: "2025 - Present",
      duration: "Running",
      type: "Full-time",
      icon: <BiStore className="text-3xl" />,
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-100 dark:bg-purple-900/30",
      description: [
        "Managing complete store operations including inventory control, stock management, and material handling for commodities trading",
        "Implementing efficient inventory tracking systems reducing stock discrepancies by 25%",
        "Coordinating with suppliers and vendors for timely procurement of materials",
        "Supervising a team of 8 staff members including store keepers and helpers",
        "Maintaining optimal stock levels to prevent overstocking and stockouts",
        "Preparing monthly inventory reports and conducting physical stock verification",
        "Ensuring proper storage conditions and FIFO/FEFO implementation",
        "Managing incoming and outgoing shipments with accurate documentation"
      ],
      achievements: [
        "Reduced inventory holding costs by 15% through optimized stock management",
        "Implemented digital inventory tracking system improving accuracy by 30%",
        "Received 'Best Employee Award' for exceptional performance in 2021",
        "Successfully managed inventory during peak seasons with 99% accuracy"
      ]
    },
    {
      id: 2,
      title: "Store Officer",
      company: "Impress Newtex Composite Textiles Ltd.",
      location: "Gorai, Mirzapur, Tangail, Bangladesh",
      period: "2015 - 2025",
      duration: "10 years",
      type: "Full-time",
      icon: <FaTshirt className="text-3xl" />,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-100 dark:bg-blue-900/30",
      description: [
        "Managed textile materials including fabrics, yarns, and accessories inventory",
        "Supervised receiving, storage, and dispatch of textile materials worth $2M annually",
        "Maintained accurate stock records using ERP and spreadsheet systems",
        "Coordinated with production department for just-in-time material delivery",
        "Conducted regular cycle counts and annual physical inventory",
        "Implemented barcode system for efficient material tracking",
        "Managed supplier relationships and evaluated vendor performance",
        "Trained and supervised junior store staff on inventory procedures"
      ],
      achievements: [
        "Improved inventory accuracy from 92% to 98% within first year",
        "Reduced material wastage by 20% through improved storage practices",
        "Successfully implemented 5S methodology in warehouse organization",
        "Recognized as 'Employee of the Year' in 2016 for outstanding performance"
      ]
    }
  ];

export const keySkills = [
    { name: "Inventory Management", icon: <FaBoxes />, level: 95 },
    { name: "Stock Control", icon: <FaClipboardList />, level: 95 },
    { name: "Supply Chain", icon: <FaTruck />, level: 90 },
    { name: "Team Leadership", icon: <FaUsers />, level: 90 },
    { name: "Data Analysis", icon: <FaChartLine />, level: 85 },
    { name: "Warehouse Operations", icon: <FaWarehouse />, level: 95 }
  ];

export const highlights = [
    { value: "10+", label: "Years Experience", icon: <FaCalendarAlt /> },
    { value: "2", label: "Leadership Roles", icon: <FaUsers /> },
    { value: "15+", label: "Team Members Led", icon: <FaUsers /> },
    { value: "98%", label: "Inventory Accuracy", icon: <FaCheckCircle /> },
    { value: "3", label: "Performance Awards", icon: <FaAward /> },
    { value: "25%", label: "Cost Reduction", icon: <FaChartLine /> }
  ];