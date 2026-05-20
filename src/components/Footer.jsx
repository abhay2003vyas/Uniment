/**
 * Footer.jsx — SAP.com-inspired redesign using Material UI
 *
 * Design language:
 *  - Deep charcoal background  (#1C2B33)  → matches SAP's dark footer
 *  - SAP Blue accent            (#0070F2)
 *  - Clean dividers, tight grid, enterprise feel
 *  - MUI Box / Typography / Link / Divider / Stack / Grid
 *
 * Install deps (if not already):
 *   npm install @mui/material @emotion/react @emotion/styled
 */

import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  Stack,
  Divider,
  IconButton,
  Chip,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import logo from "../assets/logo.jpeg"; // ← same as Navbar

// ─── Theme ────────────────────────────────────────────────────────────────────
const footerTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#0070F2" },           // SAP Blue
    background: { default: "#1C2B33" },
  },
  typography: {
    fontFamily: "'72', 'Segoe UI', 'Roboto', sans-serif",
  },
});

// ─── Data ─────────────────────────────────────────────────────────────────────
const NAV_COLS = [
  {
    heading: "Platform",
    links: [
      { label: "Home",            href: "#home" },
      { label: "About Us",        href: "#about" },
      { label: "Specialisations", href: "#specialisation" },
      { label: "Reviews",         href: "#feedback" },
    ],
  },
  {
    heading: "Support",
    links: [
      { label: "Contact Us",     href: "#contact" },
      { label: "WhatsApp Us",    href: "https://wa.me/919876543210" },
      { label: "Email Support",  href: "mailto:support@unimentassignment.com" },
      { label: "Leave a Review", href: "#feedback-form" },
    ],
  },
];

const SOCIAL = [
  { icon: <InstagramIcon fontSize="small" />, label: "Instagram", href: "#" },
  { icon: <WhatsAppIcon fontSize="small" />,  label: "WhatsApp",  href: "https://wa.me/919876543210" },
  { icon: <EmailIcon fontSize="small" />,     label: "Email",     href: "mailto:support@unimentassignment.com" },
];

// ─── Tokens ───────────────────────────────────────────────────────────────────
const BG         = "#1C2B33";   // SAP dark footer
const BG_SURFACE = "#223040";   // slightly lighter panel
const SAP_BLUE   = "#0070F2";
const TEXT_PRI   = "#FFFFFF";
const TEXT_SEC   = "rgba(255,255,255,0.60)";
const TEXT_MUT   = "rgba(255,255,255,0.35)";
const DIVIDER    = "rgba(255,255,255,0.08)";

// ─── Component ────────────────────────────────────────────────────────────────
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <ThemeProvider theme={footerTheme}>
      <Box
        component="footer"
        sx={{
          backgroundColor: BG,
          borderTop: `1px solid ${DIVIDER}`,
          pt: { xs: 6, md: 8 },
          pb: { xs: 3, md: 4 },
        }}
      >
        <Container maxWidth="lg">

          {/* ── Top grid ──────────────────────────────────────────────────── */}
          <Grid container spacing={{ xs: 5, md: 8 }}>

            {/* Brand column */}
            <Grid item xs={12} md={5}>
              {/* Logo row */}
              <Link
                href="#home"
                underline="none"
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 1.5,
                  mb: 2.5,
                }}
              >
                <Box
                  component="img"
                  src={logo}
                  alt="Uniment Assignment"
                  sx={{
                    width: 38,
                    height: 38,
                    borderRadius: "8px",
                    objectFit: "cover",
                    border: "1px solid rgba(255,255,255,0.12)",
                  }}
                />
                <Box>
                  <Typography
                    sx={{
                      fontFamily: "'Playfair Display', Georgia, serif",
                      fontSize: "15px",
                      fontWeight: 700,
                      color: TEXT_PRI,
                      lineHeight: 1.2,
                    }}
                  >
                    Uniment Assignment
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "9px",
                      fontWeight: 600,
                      letterSpacing: "0.16em",
                      textTransform: "uppercase",
                      color: TEXT_MUT,
                    }}
                  >
                    Academic Excellence
                  </Typography>
                </Box>
              </Link>

              {/* Description */}
              <Typography
                variant="body2"
                sx={{
                  color: TEXT_SEC,
                  lineHeight: 1.85,
                  fontSize: "13px",
                  maxWidth: 320,
                  mb: 3,
                }}
              >
                Connecting students with domain experts for precise,
                well-researched academic assistance — on time, every time.
              </Typography>

              {/* Social icons */}
              <Stack direction="row" spacing={1}>
                {SOCIAL.map(({ icon, label, href }) => (
                  <IconButton
                    key={label}
                    component="a"
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    aria-label={label}
                    size="small"
                    sx={{
                      width: 36,
                      height: 36,
                      borderRadius: "8px",
                      border: `1px solid rgba(255,255,255,0.10)`,
                      background: "rgba(255,255,255,0.05)",
                      color: TEXT_SEC,
                      transition: "all 0.2s",
                      "&:hover": {
                        background: `rgba(0, 112, 242, 0.15)`,
                        borderColor: `rgba(0, 112, 242, 0.40)`,
                        color: SAP_BLUE,
                      },
                    }}
                  >
                    {icon}
                  </IconButton>
                ))}
              </Stack>
            </Grid>

            {/* Nav columns */}
            {NAV_COLS.map((col) => (
              <Grid item xs={6} md={3.5} key={col.heading}>
                <Typography
                  sx={{
                    fontSize: "10px",
                    fontWeight: 700,
                    letterSpacing: "0.20em",
                    textTransform: "uppercase",
                    color: TEXT_MUT,
                    mb: 2.5,
                  }}
                >
                  {col.heading}
                </Typography>

                <Stack spacing={1.4}>
                  {col.links.map((l) => (
                    <Link
                      key={l.label}
                      href={l.href}
                      underline="none"
                      target={l.href.startsWith("http") ? "_blank" : undefined}
                      rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      sx={{
                        fontSize: "13px",
                        fontWeight: 400,
                        color: TEXT_SEC,
                        transition: "color 0.18s",
                        "&:hover": { color: SAP_BLUE },
                      }}
                    >
                      {l.label}
                    </Link>
                  ))}
                </Stack>
              </Grid>
            ))}
          </Grid>

          {/* ── Divider ───────────────────────────────────────────────────── */}
          <Divider sx={{ borderColor: DIVIDER, mt: { xs: 5, md: 7 }, mb: 3 }} />

          {/* ── Bottom bar ────────────────────────────────────────────────── */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 2,
            }}
          >
            <Typography sx={{ fontSize: "12px", color: TEXT_MUT }}>
              © {year} Uniment Assignment. All rights reserved.
            </Typography>

            {/* "All experts verified" badge */}
            <Chip
              size="small"
              icon={
                <FiberManualRecordIcon
                  sx={{
                    fontSize: "8px !important",
                    color: "#4CAF50 !important",
                    animation: "sapPulse 2s ease-in-out infinite",
                    "@keyframes sapPulse": {
                      "0%, 100%": { opacity: 1, transform: "scale(1)" },
                      "50%":       { opacity: 0.5, transform: "scale(1.4)" },
                    },
                  }}
                />
              }
              label="All experts verified & active"
              sx={{
                height: 26,
                px: 0.5,
                background: "rgba(255,255,255,0.04)",
                border: `1px solid rgba(255,255,255,0.08)`,
                color: TEXT_MUT,
                fontSize: "11px",
                fontWeight: 500,
                letterSpacing: "0.01em",
                "& .MuiChip-icon": { ml: "6px" },
              }}
            />
          </Box>

        </Container>
      </Box>
    </ThemeProvider>
  );
}