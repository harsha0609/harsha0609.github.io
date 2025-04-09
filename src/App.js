import React, { useState, useEffect } from 'react';
import {
    Container,
    Box,
    Typography,
    Link,
    AppBar,
    Toolbar,
    IconButton,
    Paper,
    Grid,
    Chip,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Button,
    Stack,
    useScrollTrigger,
    Slide,
    CssBaseline,
    ThemeProvider,
    createTheme,
    useTheme,
    useMediaQuery,
    Divider
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion'; // Import framer-motion

// Import necessary icons (keeping existing ones, adding a few alternatives if needed)
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LanguageIcon from '@mui/icons-material/Language';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SchoolIcon from '@mui/icons-material/School';
import CodeIcon from '@mui/icons-material/Code'; // Keep for potential use
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import BuildIcon from '@mui/icons-material/Build'; // Keep for potential use
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory'; // Alt icon for experience
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects'; // Alt icon for skills
import PaletteIcon from '@mui/icons-material/Palette'; // Icon for skills category
import TerminalIcon from '@mui/icons-material/Terminal'; // Icon for skills category
import StorageIcon from '@mui/icons-material/Storage'; // Icon for skills category
import SecurityIcon from '@mui/icons-material/Security'; // Icon for skills category
import CloudQueueIcon from '@mui/icons-material/CloudQueue'; // Icon for skills category
import ConstructionIcon from '@mui/icons-material/Construction'; // Icon for skills category
import ArticleIcon from '@mui/icons-material/Article'; // Icon for projects

// --- Data (Remains the same) ---
const portfolioData = {
    name: "Harsha Vardhan G",
    location: "Dublin, Ireland",
    phone: "+353 892126260",
    email: "hv2595@gmail.com",
    website: "harsha0609.github.io",
    github: "github.com/harsha0609",
    linkedin: "linkedin.com/in/harsha-vardhan-946b6515a",
    profile: "Research Software Developer with over 3 years of experience specializing in the intersection of software engineering, Blockchain, and privacy-enhancing technologies. Holds an MSc in Computer Science from Trinity College Dublin. Proficient in containerization, cloud deployment (AWS), and applied cryptography. Currently advancing research in privacy-preserving cryptographic protocols, zero-knowledge proofs (ZKPs), and blockchain privacy at the ADAPT Centre. Dedicated to leveraging cutting-edge research to engineer secure and decentralized systems.",
    education: [{ institution: "Trinity College Dublin", location: "Dublin, Ireland", degree: "MSc in Computer Science", duration: "Sept 2023 - Sept 2024", specialization: "Intelligent Systems - Specialisation" }, { institution: "National Institute Of Technology Karnataka", location: "Surathkal, India", degree: "BTech in Information Technology", duration: "July 2016 - June 2020", notes: "CGPA - 8.48/10" }],
    skills: [
        { category: "Programming Languages", items: "Python, JavaScript, C/C++, SQL, HTML/CSS", icon: <TerminalIcon /> },
        { category: "Web Development", items: "ReactJS, NodeJS, Django REST Framework, NextJS, Flask, Redux, REST APIs, Tailwind CSS", icon: <CodeIcon /> },
        { category: "Blockchain & ZKPs", items: "Zero-Knowledge Proofs (ZKPs, zk-SNARKs), Zcash, XRP", icon: <SecurityIcon /> },
        { category: "Applied Cryptography", items: "Privacy-Enhancing Tech (HE, MPC), Primitives (ECC, RSA, SHA-256), Digital Signatures (ECDSA), Key Management", icon: <SecurityIcon /> },
        { category: "Databases and Cloud", items: "PostgreSQL, AWS, Docker, Firebase, GCP", icon: <StorageIcon /> },
        { category: "Developer Tools", items: "Git, Linux, circom, python-cryptography", icon: <ConstructionIcon /> }
    ],
    experience: [{ title: "Research Software Engineer", company: "ADAPT Centre, Trinity College Dublin", location: "Dublin, Ireland", duration: "Jan 2025 - Present", description: ["Developing and researching cutting-edge <strong>blockchain privacy</strong> solutions utilizing <strong>Zero-Knowledge Proofs (ZKPs)</strong>.", "Investigating and exploring scalable <strong>ZKP</strong> implementations aimed at enhancing security and anonymity in transactions.", "Contributing to projects focused on secure and anonymous transaction systems within the blockchain domain.", "Collaborating on research publications and contributing to the development of <strong>decentralized systems</strong> leveraging cutting-edge privacy technologies."] }, { title: "Software Engineer", company: "Stratforge", location: "Chennai, India", duration: "Sept 2020 - Aug 2023", description: ["Drove end-to-end development by conducting comprehensive requirement analysis, designing robust system architecture, and optimizing database performance, resulting in a reduction in query response time and faster deployment cycles.", "Architected scalable backend systems using <strong>Django REST Framework</strong> and integrated them with <strong>ReactJS</strong> and <strong>Redux</strong>-driven frontends.", "Managed containerization and deployment using <strong>Docker</strong> for scalable and reliable application performance."] }],
    projects: [{ title: "NFT-Based Public Key Infrastructure on XRP Ledger", organisation: "ADAPT Centre", location: "Dublin, Ireland", date: "Ongoing", description: ["Implemented a <strong>Public Key Infrastructure (PKI)</strong> storing X.509 certificate representations as <strong>NFTs</strong> on the <strong>XRP Ledger</strong>.", "Developed a secure email wrapper prototype utilizing this PKI for message encryption and decryption."] }, { title: "ZKP Integration with XRP Ledger", organisation: "ADAPT Centre", location: "Dublin, Ireland", date: "Ongoing", description: ["Researching and prototyping methods for integrating <strong>Zero-Knowledge Proofs</strong> with the <strong>XRP Ledger</strong> to enhance transaction privacy and network capabilities."] }, { title: "SavdhanSity - Sustainable City Management Application", organisation: "Trinity College Dublin", location: "Dublin, Ireland", date: "Sept 2023 - Present", description: ["Developed a full-stack web application using <strong>Django REST Framework</strong> and <strong>ReactJS</strong> for sustainable city management, participating in the complete <strong>end-to-end software development lifecycle</strong> including deployment."] }, { title: "Proof Of Work++ (Research Project)", organisation: "Trinity College Dublin", location: "Dublin, Ireland", date: "Sept 2023 - Sept 2024", description: ["Designed and Implemented an alternative Proof-of-Work protocol for blockchain consensus, providing enhanced information about mining progress."] }, { title: "ZKP-Based Voting Application on Zcash", organisation: "ADAPT Centre", location: "Dublin, Ireland", date: "Completed", description: ["Designed and developed a proof-of-concept voting system leveraging <strong>Zcash</strong> infrastructure, utilizing shielded addresses (z-addr) for voter anonymity and transparent addresses (t-addr) for candidates, underpinned by <strong>Zero-Knowledge Proofs</strong>."] }, { title: "Zcash Developer Tools (RPC Wrapper & Block Explorer)", organisation: "ADAPT Centre / Personal", location: "Remote / Dublin", date: "Completed", description: ["Developed and deployed a comprehensive <strong>JavaScript RPC wrapper</strong> for <strong>Zcash</strong> using <strong>NodeJS</strong>, published as a live library on <strong>NPM</strong> for developer use.", "Built a seamless <strong>Zcash block explorer</strong> using <strong>Flask</strong> (backend) and <strong>ReactJS</strong> (frontend), specifically designed for interacting with a Zcash node operating in regtest mode."] }, { title: "RedFlare - Real-time Call Analysis", organisation: "Stratforge", location: "Chennai, India", date: "Jun 2020 - Apr 2021", description: ["Developed a real-time application for customer call processing with Speech-to-Text Quality Assessment (SSQA) analysis; implemented live call monitoring and provided statistical insights, reducing call resolution time by 20% and improving customer satisfaction scores by 15%."] }]
};


// --- Theme ---
const customTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            // Using Amber/Gold shades
            main: '#FFB300', // Amber 700 - A strong, warm gold
            light: '#FFD54F', // Amber 300 - Lighter gold/yellow
            dark: '#FF8F00', // Amber 800 - Deeper orange-gold
            contrastText: 'rgba(0, 0, 0, 0.87)', // Dark text contrasts better with yellow/gold
        },
        secondary: {
            // Using a complementary Deep Teal/Blue-Green
            main: '#00796B', // Teal 700
            light: '#4DB6AC', // Teal 300
            dark: '#004D40', // Teal 900
            contrastText: '#FFFFFF', // White text contrasts well with Teal
        },
        background: {
            default: '#FFFDF7', // Very light, warm off-white/beige
            paper: '#FFFFFF',
        },
        text: {
            primary: '#212121', // Darker grey (Grey 900) for strong readability
            secondary: '#757575', // Medium grey (Grey 600)
        },
        divider: 'rgba(0, 0, 0, 0.1)', // Slightly lighter divider
    },
    typography: {
        fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif', // Keep modern font
        h1: { fontWeight: 700, letterSpacing: '-1.5px' },
        h2: { fontWeight: 700, letterSpacing: '-0.5px' },
        h3: { fontWeight: 600 },
        h4: { fontWeight: 600 },
        h5: { fontWeight: 500 },
        h6: { fontWeight: 600 },
        button: { textTransform: 'none', fontWeight: 600 },
        body1: { fontSize: '1rem', lineHeight: 1.7 },
        body2: { fontSize: '0.9rem', lineHeight: 1.6 },
    },
    shape: {
        borderRadius: 8, // Keep slightly less rounded corners
    },
    components: {
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundImage: 'none',
                    transition: 'box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out',
                },
                outlined: ({ theme }) => ({
                    // Use a subtle border derived from the primary color or divider
                    borderColor: `${theme.palette.primary.main}33`, // Light gold border
                }),
            },
        },
        MuiChip: {
            styleOverrides: {
                // Default chip uses primary (gold) theme
                root: ({ theme }) => ({
                    backgroundColor: `${theme.palette.primary.main}2A`, // Light gold background
                    color: theme.palette.primary.dark, // Dark gold text
                    fontWeight: 500,
                    border: `1px solid ${theme.palette.primary.main}40`, // Subtle gold border
                }),
                // Filled chips (e.g., Experience duration) use secondary (teal) theme
                filled: ({ theme }) => ({
                    backgroundColor: theme.palette.secondary.main, // Use main teal
                    color: theme.palette.secondary.contrastText, // White text
                    fontWeight: 500,
                    '&:hover': {
                        backgroundColor: theme.palette.secondary.dark, // Darken on hover
                    }
                }),
                // Outlined chips (e.g., Project date) use secondary (teal) theme
                outlined: ({ theme }) => ({
                    borderColor: theme.palette.secondary.main, // Teal border
                    color: theme.palette.secondary.dark, // Dark teal text
                    backgroundColor: 'transparent',
                    '&:hover': {
                        backgroundColor: `${theme.palette.secondary.main}1A`, // Very light teal background on hover
                    }
                }),
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    boxShadow: 'none',
                    '&:hover': {
                        boxShadow: 'none',
                    }
                },
                // Primary contained buttons use the gold theme
                containedPrimary: ({ theme }) => ({
                    backgroundColor: theme.palette.primary.main,
                    color: theme.palette.primary.contrastText,
                    '&:hover': {
                        backgroundColor: theme.palette.primary.dark, // Darken gold on hover
                    }
                }),
                // Secondary contained buttons use the teal theme
                containedSecondary: ({ theme }) => ({
                    backgroundColor: theme.palette.secondary.main,
                    color: theme.palette.secondary.contrastText,
                    '&:hover': {
                        backgroundColor: theme.palette.secondary.dark, // Darken teal on hover
                    }
                }),
                // Hero buttons might need adjustment based on Hero background.
                // Assuming a dark-to-light gold gradient, white might still work.
                // If Hero becomes light, change color/borderColor accordingly.
                outlinedInherit: ({ theme }) => ({
                    borderColor: 'rgba(255, 255, 255, 0.7)', // Keep light border for dark hero bg
                    color: 'white', // Keep white text for dark hero bg
                    '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        borderColor: 'white',
                    }
                }),
            }
        },
        MuiListItemIcon: {
            styleOverrides: {
                // Icons in lists use primary (gold) color
                root: ({ theme }) => ({
                    minWidth: 'auto',
                    marginRight: theme.spacing(1.5),
                    color: theme.palette.primary.main, // Gold icons
                }),
            }
        },
        MuiListItem: {
            styleOverrides: {
                root: {
                    paddingTop: 4,
                    paddingBottom: 4,
                }
            }
        }
        // Add overrides for other components (like SectionTitle underline, Timeline colors)
        // in their respective components or here if needed, using the new palette.
    },
});

// --- Framer Motion Variants (Refined) ---
const sectionVariants = {
    hidden: { opacity: 0, y: 20 }, // Start slightly lower
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6, // Slightly faster
            //   ease: [0.6, 0.01, -0.05, 0.95], // Custom ease
            ease: "circOut",
            staggerChildren: 0.1, // Faster stagger
            when: "beforeChildren"
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 25, scale: 0.98 }, // Add subtle scale
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.5, ease: "circOut" } // Custom ease
    }
};

const cardHover = {
    hover: {
        y: -8, // Slightly more lift
        scale: 1.02, // Subtle scale increase
        boxShadow: `0px 12px 30px ${customTheme.palette.primary.main}33`, // Use theme color dynamically with more blur
        transition: { duration: 0.3, ease: "easeOut" }
    }
};

// --- Helper Function for Links (Remains the same) ---
const formatLink = (url) => {
    if (!url) return '#';
    if (url.startsWith('http://') || url.startsWith('https://')) return url;
    if (url.includes('@') && !url.startsWith('mailto:')) return `mailto:${url}`;
    if (url.startsWith('+') && !url.startsWith('tel:')) return `tel:${url}`;
    if (url.includes('.') && !url.startsWith('http')) return `https://${url}`;
    return url;
};

// --- Helper to render HTML strings safely (Updated for new theme) ---
const RenderHtml = ({ htmlString }) => {
    // Basic sanitization (replace with DOMPurify in production)
    const cleanHtml = htmlString.replace(/<script.*?>.*?<\/script>/gi, '');
    // Apply specific styling to strong tags using inline styles or classes
    const styledHtml = cleanHtml.replace(/<strong>(.*?)<\/strong>/g, `<strong style="color: ${customTheme.palette.primary.dark}; font-weight: 600;">$1</strong>`);
    return <span dangerouslySetInnerHTML={{ __html: styledHtml }} />;
};

// --- Reusable Components (Updated Motion components) ---

const MotionPaper = motion(Paper);
const MotionBox = motion(Box);
const MotionGrid = motion(Grid);
const MotionTypography = motion(Typography); // Motion component for Typography
const MotionStack = motion(Stack); // Motion component for Stack

const SectionContainer = ({ children, sx = {}, id, ...props }) => (
    <MotionBox
        id={id}
        component="section"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }} // Trigger animation earlier
        sx={{
            py: { xs: 8, md: 10 }, // Adjusted padding
            overflow: 'hidden',
            position: 'relative', // Needed for potential pseudo-elements
            ...sx
        }}
        {...props}
    >
        <Container maxWidth="lg">
            {children}
        </Container>
    </MotionBox>
);

const SectionTitle = ({ children, sx = {}, ...props }) => (
    <MotionTypography
        variants={itemVariants}
        variant="h2"
        sx={{
            textAlign: 'center',
            mb: { xs: 6, md: 8 },
            color: 'primary.dark', // Use dark primary color for titles
            position: 'relative',
            display: 'inline-block', // Needed for pseudo-element positioning
            left: '50%', // Center align
            transform: 'translateX(-50%)', // Center align
            pb: 1,
            '&::after': { // Subtle underline effect
                content: '""',
                position: 'absolute',
                bottom: 0,
                left: '20%',
                width: '60%',
                height: '3px',
                backgroundColor: 'secondary.main', // Use secondary color for accent
                borderRadius: '2px',
            },
            ...sx
        }}
        {...props}
    >
        {children}
    </MotionTypography>
);

// --- Portfolio Sections (Updated with new theme and styles) ---

function HeroSection({ data }) {
    return (
        <Box
            sx={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                // Updated Gradient using the new theme
                background: `linear-gradient(135deg, ${customTheme.palette.primary.dark} 0%, ${customTheme.palette.primary.main} 60%, ${customTheme.palette.primary.light} 100%)`,
                color: 'white',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
                py: 10,
                '&::before': { // More subtle background pattern
                    content: '""',
                    position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                    backgroundImage: 'radial-gradient(circle at 5% 15%, rgba(255, 255, 255, 0.06) 0%, transparent 30%), radial-gradient(circle at 95% 85%, rgba(255, 255, 255, 0.05) 0%, transparent 25%)',
                    opacity: 0.7,
                    backgroundSize: 'cover', // Ensure pattern covers area
                }
            }}
        >
            <Container maxWidth="md" sx={{ zIndex: 1 }}> {/* Ensure content is above pseudo-element */}
                <MotionBox
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "circOut", }}
                >
                    <MotionTypography
                        variant="h1"
                        component="h1"
                        sx={{
                            fontSize: { xs: '2.8rem', sm: '3.8rem', md: '4.5rem' }, // Slightly adjusted sizes
                            mb: 2,
                            textShadow: '1px 1px 4px rgba(0,0,0,0.25)', // Refined shadow
                        }}
                        initial={{ opacity: 0, letterSpacing: "-10px" }} // Entrance animation
                        animate={{ opacity: 1, letterSpacing: "-1.5px" }}
                        transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                    >
                        {data.name}
                    </MotionTypography>
                    <MotionTypography
                        variant="h5"
                        component="p"
                        sx={{
                            mb: 4,
                            fontWeight: 400,
                            opacity: 0.9,
                            maxWidth: '750px', // Slightly wider
                            mx: 'auto',
                            fontSize: { xs: '1.1rem', md: '1.25rem' }, // Adjusted size
                        }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 0.9, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.6 }}
                    >
                        Research Software Developer | Blockchain & Privacy Tech
                    </MotionTypography>
                    <MotionStack
                        direction="row"
                        spacing={1} // Reduced spacing
                        justifyContent="center"
                        alignItems="center"
                        sx={{ mb: 5, color: customTheme.palette.primary.light }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.8 }}
                    >
                        <LocationOnIcon fontSize="small" />
                        <Typography variant="body1">{data.location}</Typography>
                    </MotionStack>
                    <MotionStack
                        direction="row"
                        spacing={1.5} // Adjusted spacing
                        justifyContent="center"
                        flexWrap="wrap"
                        gap={1.5} // Added gap for wrapping
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 1.0, staggerChildren: 0.1 }}
                    >
                        {data.github && <motion.div variants={itemVariants}><Button variant="outlined" color="inherit" startIcon={<GitHubIcon />} href={formatLink(data.github)} target="_blank" rel="noopener noreferrer">GitHub</Button></motion.div>}
                        {data.linkedin && <motion.div variants={itemVariants}><Button variant="outlined" color="inherit" startIcon={<LinkedInIcon />} href={formatLink(data.linkedin)} target="_blank" rel="noopener noreferrer">LinkedIn</Button></motion.div>}
                        {data.website && <motion.div variants={itemVariants}><Button variant="outlined" color="inherit" startIcon={<LanguageIcon />} href={formatLink(data.website)} target="_blank" rel="noopener noreferrer">Website</Button></motion.div>}
                        {data.email && <motion.div variants={itemVariants}><Button variant="outlined" color="inherit" startIcon={<EmailIcon />} href={formatLink(data.email)}>Email</Button></motion.div>}
                    </MotionStack>
                </MotionBox>
                <MotionBox
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.5 }}
                    sx={{
                        position: 'absolute',
                        bottom: { xs: 30, md: 50 }, // Adjusted position
                        left: '50%',
                        transform: 'translateX(-50%)',
                    }}
                >
                    <IconButton
                        size="large"
                        sx={{
                            color: 'white',
                            border: '1px solid rgba(255,255,255,0.5)',
                            backgroundColor: 'rgba(255,255,255,0.1)',
                            '&:hover': {
                                backgroundColor: 'rgba(255,255,255,0.2)',
                                transform: 'scale(1.1)'
                            },
                            transition: 'transform 0.3s ease, background-color 0.3s ease',
                            animation: 'bounce 2.5s infinite ease-in-out' // Smoother bounce
                        }}
                        onClick={() => document.getElementById('about-section')?.scrollIntoView({ behavior: 'smooth' })}
                        aria-label="Scroll down"
                    >
                        <ArrowDownwardIcon />
                    </IconButton>
                    <style>{`
            @keyframes bounce {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-12px); }
            }
          `}</style>
                </MotionBox>
            </Container>
        </Box>
    );
}

function AboutSection({ profile }) {
    return (
        <SectionContainer id="about-section" sx={{ bgcolor: 'background.paper' }}>
            {/* Optional: Add a subtle background shape or pattern here */}
            <Grid container spacing={{ xs: 4, md: 8 }} alignItems="center" justifyContent="center">
                <Grid item xs={12} md={5} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                    <MotionBox variants={itemVariants}>
                        <Typography variant="h3" sx={{ mb: 3, fontWeight: 700, color: 'primary.dark' }}>
                            About Me
                        </Typography>
                        <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'text.secondary' }}>
                            {profile}
                        </Typography>
                    </MotionBox>
                </Grid>
                <Grid item xs={8} sm={6} md={4}>
                    <MotionBox
                        variants={itemVariants}
                        sx={{
                            p: 2,
                            bgcolor: 'primary.light',
                            borderRadius: '50%', // Make it circular
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            aspectRatio: '1 / 1', // Ensure it's a circle
                            mx: 'auto', // Center on smaller screens
                            boxShadow: `0px 8px 25px ${customTheme.palette.primary.main}40`,
                        }}
                    >
                        <AccountCircleIcon sx={{ fontSize: { xs: 100, sm: 140, md: 160 }, color: 'white' }} />
                    </MotionBox>
                </Grid>
            </Grid>
        </SectionContainer>
    );
}


function SkillsSection({ skills }) {
    return (
        <SectionContainer sx={{ bgcolor: 'background.default' }}>
            <SectionTitle>Technical Skills</SectionTitle>
            <Grid container spacing={3}> {/* Reduced spacing slightly */}
                {skills.map((skillCat, index) => (
                    <MotionGrid item xs={12} sm={6} md={4} key={index} variants={itemVariants}>
                        <MotionPaper
                            variant="outlined"
                            sx={{
                                p: { xs: 2, md: 3 }, // Responsive padding
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                borderColor: `${customTheme.palette.primary.main}30`, // Subtle border color
                                backgroundColor: 'background.paper', // Ensure paper background
                            }}
                            variants={cardHover} whileHover="hover"
                        >
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                {React.cloneElement(skillCat.icon, { sx: { mr: 1.5, color: 'primary.main', fontSize: '1.8rem' } })}
                                <Typography variant="h6" sx={{ color: 'primary.dark', fontWeight: 600 }}>
                                    {skillCat.category}
                                </Typography>
                            </Box>
                            <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
                                {skillCat.items.split(',').map(item => item.trim()).map((skill, idx) => (
                                    <Chip key={idx} label={skill} size="small" />
                                ))}
                            </Stack>
                        </MotionPaper>
                    </MotionGrid>
                ))}
            </Grid>
        </SectionContainer>
    );
}

function ExperienceSection({ experience }) {
    return (
        <SectionContainer sx={{ bgcolor: 'background.paper' }}>
            <SectionTitle>Work Experience</SectionTitle>
            <Box sx={{
                position: 'relative',
                // Timeline line using theme colors
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    left: { xs: '20px', md: '50%' }, // Center line on md+
                    transform: { md: 'translateX(-50%)' },
                    top: '10px', // Start below first icon
                    bottom: '10px', // End above last icon
                    width: '3px', // Thinner line
                    backgroundColor: customTheme.palette.primary.light, // Use theme color
                    borderRadius: '2px',
                }
            }}>
                {experience.map((exp, index) => (
                    <MotionBox
                        key={index}
                        variants={itemVariants}
                        sx={{
                            mb: { xs: 4, md: 0 }, // No margin bottom on md+ to use padding for spacing
                            display: 'flex', // Use flex for alignment
                            position: 'relative',
                            justifyContent: index % 2 === 0 ? 'flex-start' : 'flex-end', // Alternate sides
                            pb: { md: 6 }, // Add padding between items on md+
                            '&:last-child': { pb: { md: 0 } }, // No padding for last item
                        }}
                    >
                        {/* Timeline Icon Container (for positioning) */}
                        <Box
                            sx={{
                                position: 'absolute',
                                left: { xs: '20px', md: '50%' },
                                transform: 'translateX(-50%)',
                                top: 0,
                                zIndex: 1,
                            }}
                        >
                            <MotionBox
                                sx={{
                                    width: 40, height: 40,
                                    borderRadius: '50%',
                                    backgroundColor: customTheme.palette.primary.main, // Use theme color
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    color: 'white',
                                    boxShadow: `0 0 0 5px ${customTheme.palette.background.paper}`, // Use paper background for cutout effect
                                }}
                                whileHover={{ scale: 1.1 }} // Add hover effect to icon
                            >
                                <BusinessCenterIcon fontSize="small" />
                            </MotionBox>
                        </Box>

                        {/* Content Card */}
                        <MotionPaper
                            variant="outlined"
                            sx={{
                                p: { xs: 2, md: 3 },
                                width: { xs: 'calc(100% - 50px)', md: 'calc(50% - 40px)' }, // Adjust width based on layout
                                ml: { xs: '50px', md: index % 2 === 0 ? '40px' : 0 }, // Margin for left items
                                mr: { xs: 0, md: index % 2 !== 0 ? '40px' : 0 }, // Margin for right items
                                borderColor: `${customTheme.palette.primary.main}30`, // Subtle border
                            }}
                            variants={cardHover} whileHover="hover"
                        >
                            <Typography variant="h6" component="h3" color="primary.dark" sx={{ fontWeight: 600 }}>{exp.title}</Typography>
                            <Typography variant="subtitle1" sx={{ fontWeight: 500, mb: 0.5 }}>{exp.company}</Typography>
                            <Typography variant="body2" color="text.secondary" gutterBottom>{exp.location}</Typography>
                            <Chip label={exp.duration} size="small" variant="filled" sx={{ mb: 2 }} /> {/* Use filled variant style */}
                            <List dense disablePadding>
                                {exp.description.map((item, idx) => (
                                    <ListItem key={idx} sx={{ p: 0, mb: 0.5, alignItems: 'flex-start' }}>
                                        <ListItemIcon sx={{ mt: 0.5, color: 'secondary.main' }}> {/* Use secondary color */}
                                            <ChevronRightIcon fontSize="small" />
                                        </ListItemIcon>
                                        <ListItemText primary={<RenderHtml htmlString={item} />} sx={{ '& .MuiTypography-root': { fontSize: '0.9rem', lineHeight: 1.6 } }} />
                                    </ListItem>
                                ))}
                            </List>
                        </MotionPaper>
                    </MotionBox>
                ))}
            </Box>
        </SectionContainer>
    );
}


function ProjectsSection({ projects }) {
    // Keep existing sorting logic
    const sortedProjects = [...projects].sort((a, b) => {
        const dateA = a.date || ''; const dateB = b.date || '';
        const isOngoingA = dateA.includes('Present') || dateA.includes('Ongoing');
        const isOngoingB = dateB.includes('Present') || dateB.includes('Ongoing');
        if (isOngoingA && !isOngoingB) return -1;
        if (!isOngoingA && isOngoingB) return 1;
        const yearA = (dateA.match(/\d{4}/g) || []).pop(); const yearB = (dateB.match(/\d{4}/g) || []).pop();
        if (yearA && yearB && yearA !== yearB) return parseInt(yearB) - parseInt(yearA);
        if (dateA === 'Completed' && dateB !== 'Completed') return 1; if (dateB === 'Completed' && dateA !== 'Completed') return -1;
        return dateB.localeCompare(dateA);
    });

    return (
        <SectionContainer sx={{ bgcolor: 'background.default' }}>
            <SectionTitle>Projects</SectionTitle>
            <Grid container spacing={3}> {/* Consistent spacing */}
                {sortedProjects.map((proj, index) => (
                    <MotionGrid item xs={12} md={6} lg={4} key={index} variants={itemVariants}>
                        <MotionPaper
                            variant="outlined"
                            sx={{
                                p: 3,
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                borderColor: `${customTheme.palette.secondary.main}30`, // Use secondary border color
                                backgroundColor: 'background.paper',
                            }}
                            variants={cardHover} whileHover="hover"
                        >
                            <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
                                <ArticleIcon sx={{ mr: 1.5, color: 'secondary.main', fontSize: '1.8rem' }} />
                                <Box>
                                    <Typography variant="h6" component="h3" color="primary.dark" sx={{ fontWeight: 600, lineHeight: 1.3 }}>{proj.title}</Typography>
                                    <Typography variant="body2" sx={{ fontWeight: 500, mb: 0.5, color: 'text.secondary' }}>{proj.organisation}</Typography>
                                </Box>
                            </Box>
                            <Typography variant="caption" color="text.secondary" display="block" sx={{ mb: 2 }}>
                                {proj.location} | <Chip label={proj.date} size="small" variant="outlined" sx={{ height: 'auto', '& .MuiChip-label': { py: 0.2, px: 0.8 } }} /> {/* Use outlined variant style */}
                            </Typography>
                            <List dense disablePadding sx={{ flexGrow: 1, mb: 2 }}>
                                {proj.description.map((item, idx) => (
                                    <ListItem key={idx} sx={{ p: 0, mb: 0.5, alignItems: 'flex-start' }}>
                                        <ListItemIcon sx={{ minWidth: 18, mr: 1, mt: 0.5, color: 'secondary.dark' }}> {/* Darker secondary icon */}
                                            <ChevronRightIcon sx={{ fontSize: '1rem' }} /> {/* Smaller icon */}
                                        </ListItemIcon>
                                        <ListItemText primary={<RenderHtml htmlString={item} />} sx={{ '& .MuiTypography-root': { fontSize: '0.88rem', lineHeight: 1.55 } }} /> {/* Slightly smaller text */}
                                    </ListItem>
                                ))}
                            </List>
                            {/* Optional Link Area (Keep commented out or implement) */}
                            {/* <Box mt="auto" pt={1} borderTop={`1px solid ${customTheme.palette.divider}`}>
                 <Button size="small" endIcon={<LaunchIcon />}>View Details</Button>
              </Box> */}
                        </MotionPaper>
                    </MotionGrid>
                ))}
            </Grid>
        </SectionContainer>
    );
}

function EducationSection({ education }) {
    return (
        <SectionContainer sx={{ bgcolor: 'background.paper' }}>
            <SectionTitle>Education</SectionTitle>
            <Grid container spacing={4} justifyContent="center">
                {education.map((edu, index) => (
                    <MotionGrid item xs={12} md={5} key={index} variants={itemVariants}>
                        <MotionPaper
                            variant="outlined"
                            sx={{
                                p: 3,
                                textAlign: 'center',
                                borderColor: `${customTheme.palette.secondary.main}40`, // Use secondary border
                            }}
                            variants={cardHover} whileHover="hover"
                        >
                            <SchoolIcon sx={{ fontSize: 45, color: 'secondary.main', mb: 2 }} /> {/* Use secondary color */}
                            <Typography variant="h6" component="h3" color="primary.dark" sx={{ fontWeight: 600 }}>{edu.institution}</Typography>
                            <Typography variant="body2" color="text.secondary" gutterBottom>
                                {edu.location} | {edu.duration}
                            </Typography>
                            <Typography variant="subtitle1" sx={{ fontWeight: 500, my: 1 }}>{edu.degree}</Typography>
                            {edu.specialization && <Chip label={edu.specialization} size="small" variant="filled" sx={{ mb: 1 }} />} {/* Use filled variant style */}
                            {edu.notes && <Typography variant="caption" display="block" sx={{ color: 'text.secondary', mt: 1 }}>{edu.notes}</Typography>}
                        </MotionPaper>
                    </MotionGrid>
                ))}
            </Grid>
        </SectionContainer>
    );
}

function Footer({ data }) {
    // Use the purple theme directly here as it's defined outside the component scope
    return (
        <Box component="footer" sx={{ bgcolor: customTheme.palette.primary.dark, color: customTheme.palette.grey[400], py: 5, textAlign: 'center' }}>
            <Container maxWidth="lg">
                <Typography variant="h6" sx={{ mb: 2, color: 'white', fontWeight: 600 }}>{data.name}</Typography>
                <Stack direction="row" spacing={1.5} justifyContent="center" mb={3}> {/* Reduced spacing */}
                    {data.github && <IconButton aria-label="GitHub" href={formatLink(data.github)} target="_blank" rel="noopener noreferrer" sx={{ color: 'primary.light', '&:hover': { color: 'white' } }}><GitHubIcon /></IconButton>}
                    {data.linkedin && <IconButton aria-label="LinkedIn" href={formatLink(data.linkedin)} target="_blank" rel="noopener noreferrer" sx={{ color: 'primary.light', '&:hover': { color: 'white' } }}><LinkedInIcon /></IconButton>}
                    {data.website && <IconButton aria-label="Website" href={formatLink(data.website)} target="_blank" rel="noopener noreferrer" sx={{ color: 'primary.light', '&:hover': { color: 'white' } }}><LanguageIcon /></IconButton>}
                    {data.email && <IconButton aria-label="Email" href={formatLink(data.email)} sx={{ color: 'primary.light', '&:hover': { color: 'white' } }}><EmailIcon /></IconButton>}
                    {data.phone && <IconButton aria-label="Phone" href={formatLink(data.phone)} sx={{ color: 'primary.light', '&:hover': { color: 'white' } }}><PhoneIcon /></IconButton>}
                </Stack>
                <Typography variant="body2" sx={{ color: customTheme.palette.grey[300] }}> {/* Lighter grey */}
                    &copy; {new Date().getFullYear()} {data.name}. All rights reserved.
                </Typography>
                <Typography variant="caption" display="block" mt={1} sx={{ color: customTheme.palette.grey[500] }}> {/* Medium grey */}
                    Built with React, Material-UI & Framer Motion
                </Typography>
            </Container>
        </Box>
    )
}

// --- Main App Component ---
function App() {
    return (
        // Use the new customTheme
        <ThemeProvider theme={customTheme}>
            <CssBaseline />
            {/* Use default background from theme */}
            <Box sx={{ backgroundColor: 'background.default' }}>
                <HeroSection data={portfolioData} />
                <main>
                    <AboutSection profile={portfolioData.profile} />
                    <SkillsSection skills={portfolioData.skills} />
                    <ExperienceSection experience={portfolioData.experience} />
                    <ProjectsSection projects={portfolioData.projects} />
                    <EducationSection education={portfolioData.education} />
                </main>
                <Footer data={portfolioData} />
            </Box>
        </ThemeProvider>
    );
}

export default App;
