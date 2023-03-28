import EditIcon from '@mui/icons-material/Edit';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import BarChartIcon from '@mui/icons-material/BarChart';
import AppsIcon from '@mui/icons-material/Apps';

export default [
    { name: 'Edit Page', icon: <EditIcon />, },
    { name: 'Return Request', icon: <QuestionAnswerIcon />, },
    { name: 'View KPIs', icon: <BarChartIcon />, },
    { name: 'Manage Products', icon: <AppsIcon />, },
    { name: 'Logout' },
    { name: 'Return Home',  route: '/'},
];