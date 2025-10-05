import add_icon from './add_icon.svg'
import admin_logo from './admin_logo.svg'
import appointment_icon from './appointment_icon.svg'
import cancel_icon from './cancel_icon.svg'
import home_icon from './home_icon.svg'
import people_icon from './people_icon.svg'
import upload_area from './upload_area.svg'
import list_icon from './list_icon.svg'
import tick_icon from './tick_icon.svg'
import appointments_icon from './appointments_icon.svg'
import cover from './cover.svg'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import dropdown_icon from './dropdown_icon.svg'
import logo from './adminastrologo.svg'
import planner from './planner.svg'
import teacher_black from './teacher-black.png'
import banner from './teacher2.png'
import cover1 from './cover1.png'
import students from './students.png'
import arrow_icon from './arrow_icon.svg'
import set from './engineering.svg'
import sahs from './alliedSciences.svg'
import sad from './architectureAndDesign.svg'
import sca from './computerApplication.svg'
import sds from './DentalSciences.svg'
import shm from './hotelManagement.svg'
import smeh from './MediaStudies.svg'
import mishraSir from './Mishra1.png'
import divyaSanghi from './DivyaSanghiAHS1.png'
import meeta from './MeetaSingh1.png'
import parul from './ParulGandhi1.png'
import poonam from './PoonamNandal1.png'
import pratibha from './PratibhaSinghAHS.png'
import pronika from './MeetaSingh1.png'
import rashmi from './RashmiAgarwalSCA1.png'
import ravindra from './RavindarChahar1.png'
import suresh from './Suresh1.png'
import urvashi from './UrvashiSaxena1.png'
import nitesh from './NiteshMalhotraSAHS.png'



export const assets = {
    add_icon,
    admin_logo,
    teacher_black,
    appointment_icon,
    cancel_icon,
    upload_area,
    home_icon,
    people_icon,
    list_icon,
    tick_icon,
    appointments_icon,
    logo,
    students,
    cover1,
    profile_pic,
    dropdown_icon,
    cover,
    planner,
    banner,
    group_profiles,
    arrow_icon
}

export const departmentData = [
    {
        department: 'SET',
        image: set
    },
    {
        department: 'SCA',
        image: sca
    },
    {
        department: 'SAHS',
        image: sahs
    },
    {
        department: 'SAD',
        image: sad
    },
    {
        department: 'SDS',
        image: sds
    },
    {
        department: 'SHM',
        image: shm
    },
    // {
    //     department: 'SMEH',
    //     image: smeh
    // },
]

export const teachers = [
    {
        _id: 'teacher1',
        namer: 'Dr. S.D.Mishra',
        image: mishraSir,
        department: 'SET',
        degree: 'PH.D',
        experience: '6+ years',
        about: 'Dr. S.D. Mishra is a well know faculty of manav rachna institute with a speciality in Machine Learning, Deep Learning and AIML.',
        contact: 'siddheshwari.set@mriu.edu.in',
        address: {
            line1: '121003, Manav Rachna',
            line2: 'Faridabd, Haryana'
        }
    },
    {
        _id: 'teacher2',
        namer: 'Dr. Pronika Chawla',
        image: pronika,
        department: 'SET',
        degree: 'PH.D',
        experience: '6+ years',
        about: 'Dr. Pronika working as an Assistant Professors in computer science department.She completed her PhD from MRIIRS in April,2023 in Cloud computing. She has more than 15 years of teaching experience in Manav Rachna and more than 35 research papers in reputed journals and conferences',
        contact: 'pronika.set@mriu.edu.in',
        address: {
            line1: '121003, Manav Rachna',
            line2: 'Faridabd, Haryana'
        }
    },
    {
        _id: 'teacher3',
        namer: 'Dr. Poonam Nandal',
        image: poonam,
        department: 'SET',
        degree: 'PH.D',
        experience: '15+ years',
        about: 'Dr. Poonam Nandal is an esteemed academic and researcher with an impressive career spanning over 17 years. Her academic journey reached its pinnacle with a Ph.D. in Computer Science & Engineering from YMCA University of Science & Technology in 2017',
        contact: 'poonamnandal.set@mriu.edu.in',
        address: {
            line1: '121003, Manav Rachna',
            line2: 'Faridabd, Haryana'
        }
    },
    {
        _id: 'teacher4',
        namer: 'Dr. Meeta Singh',
        image: meeta,
        department: 'SET',
        degree: 'PH.D',
        experience: '20+ years',
        about: 'Dr. Meeta Singh is a distinguished educator and researcher, boasting an extensive career of over 22 years in the domain of Computer Science & Engineering. ',
        contact: 'meeta.set@mriu.edu.in',
        address: {
            line1: '121003, Manav Rachna',
            line2: 'Faridabd, Haryana'
        }
    },
    {
        _id: 'teacher1',
        namer: 'Ms. Urvashi Saxena',
        image: urvashi,
        department: 'SET',
        degree: 'Ph.D (Awaiting Provisional Degree)',
        experience: '10+ years',
        about: 'Urvashi Rahul Saxena, an Enthusiastic Academician with more than 18 years of Academic Experience. She possesses excellent communication skills and leadership qualities.',
        contact: 'urvashisaxena.set@mriu.edu.in',
        address: {
            line1: '121003, Manav Rachna',
            line2: 'Faridabd, Haryana'
        }
    },
    {
        _id: 'teacher6',
        namer: 'Dr. Ravindra Chahar',
        image: ravindra,
        department: 'SET',
        degree: 'PH.D',
        experience: '10+ years',
        about: 'Dr. Ravinder Kumar (Ph.D., M.Tech(IT), B.E.(Hons)) has been working as an Associate Professor with CSE,SET, MRIIRS since December, 2022.',
        contact: 'rkchahar..set@mriu.edu.in',
        address: {
            line1: '121003, Manav Rachna',
            line2: 'Faridabd, Haryana'
        }
    },
    {
        _id: 'teacher7',
        namer: 'Dr. Suresh Kumar',
        image: suresh,
        department: 'SET',
        degree: 'PH.D',
        experience: '20+ years',
        about: 'Dr. Suresh Kumar, is currently working as Professor in the Department of Computer Science and Engineering at Manav Rachna International Institute of Research and Studies, Faridabad. He is having more than twenty years of experience.',
        contact: 'suresh.set@mriu.edu.in',
        address: {
            line1: '121003, Manav Rachna',
            line2: 'Faridabd, Haryana'
        }
    },
    {
        _id: 'teacher8',
        namer: 'Dr. Divya Sanghi',
        image: divyaSanghi,
        department: 'SAHS',
        degree: 'PH.D',
        experience: '6+ years',
        about: 'Dr. Divya is currently serving as Professor and Head of the Department in Clinical Nutrition. Holding a Ph.D. as her highest qualification, she brings a wealth of experience with 8 years in teaching and 7 years in research. Dr. Divya specialization lies in Clinical Nutrition, with Nutrigenomics being a key area of interest.',
        contact: 'divya.fas@mriu.edu.in',
        address: {
            line1: '121003, Manav Rachna',
            line2: 'Faridabd, Haryana'
        }
    },
    {
        _id: 'teacher9',
        namer: 'Dr. Parul Gandhi',
        image: parul,
        department: 'SCA',
        degree: 'PH.D',
        experience: '15+ years',
        about: 'A Doctorate in the subject of Computer Science from Guru Jambheshwar University, Hisar. She is also a Gold Medalist in M.Sc. Computer Science. Presently she is working as Professor, Manav Rachna International Institute of Research and Studies (MRIIRS), Faridabad. In addition, she has administrative responsibility as Deputy Director, Council for Doctor Program, MRIIRS. She is having a strong inclination towards academics and research.',
        contact: 'parul.sca@mriu.edu.in',
        address: {
            line1: '121003, Manav Rachna',
            line2: 'Faridabd, Haryana'
        }
    },
    {
        _id: 'teacher10',
        namer: 'Dr. Rashmi Agarwal',
        image: rashmi,
        department: 'SCA',
        degree: 'PH.D',
        experience: '20+ years',
        about: 'Dr. Rashmi Agrawal has been working as an academician and researcher in the field of Computer Applications for over 22 years. Currently, she holds the position of Professor at the Department of Computer Applications, Manav Rachna International Institute of Research and Studies in Faridabad, India.',
        contact: 'rashmi.sca@mriu.edu.in',
        address: {
            line1: '121003, Manav Rachna',
            line2: 'Faridabd, Haryana'
        }
    },
    {
        _id: 'teacher11',
        namer: 'Dr. Pratibha Singh',
        image: pratibha,
        department: 'SAHS',
        degree: 'PH.D',
        experience: '20+ years',
        about: 'Dr. Pratibha Singh, holding the position of Professor has 23 years of teaching experience to her role. Dr. Singh areas of interest include Elderly Nutrition, reflecting her expertise in the field. Her scholarly impact is notable, with 38 publications in refereed journals and 8 in conferences.',
        contact: 'pratibha.fas@mriu.edu.in',
        address: {
            line1: '121003, Manav Rachna',
            line2: 'Faridabd, Haryana'
        }
    },
    {
        _id: 'teacher12',
        namer: 'Dr. Nitesh Malhotra',
        image: nitesh,
        department: 'SAHS',
        degree: 'PH.D',
        experience: '20+ years',
        about: 'Dr. Nitesh Malhotra has experience of 17 years spanning in both, academics and clinical. Dr. Nitesh has received the prestigious TÜBİTAK Fellowship as visiting scientist at Ege Üniversitesi, Turkey. He is also a Working group member of Cost Association European Cooperation in Science and Technology.',
        contact: 'nitesh.sahs@mriu.edu.in',
        address: {
            line1: '121003, Manav Rachna',
            line2: 'Faridabd, Haryana'
        }
    },



]
