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
import PhoneIcon from "@mui/icons-material/Phone";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import logo from "../assets/logo.jpeg";

// ─── Theme ────────────────────────────────────────────────────────────────────
const footerTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#C0392B" },
    background: { default: "#111827" },
  },
  typography: {
    fontFamily: "'Inter', 'Segoe UI', 'Roboto', sans-serif",
  },
});

// ─── Data ─────────────────────────────────────────────────────────────────────
const NAV_COLS = [
  {
    heading: "Platform",
    links: [
      { label: "Home",            href: "#home"           },
      { label: "About Us",        href: "#about"          },
      { label: "Services",        href: "#services"       },
      { label: "Blogs",           href: "#blogs"          },
      { label: "Reviews",         href: "#feedback"       },
    ],
  },
  {
    heading: "Support",
    links: [
      { label: "Contact Us",     href: "#contact"                              },
      { label: "WhatsApp Us",    href: "https://wa.me/918764412948"            },
      { label: "Call Us",        href: "tel:+918764412948"                     },
      { label: "Email Support",  href: "mailto:unimentsolutionsllp@gmail.com"  },
      { label: "Leave a Review", href: "#feedback-form"                        },
    ],
  },
];

const SOCIAL = [
  { icon: <InstagramIcon fontSize="small" />, label: "Instagram", href: "#"                                           },
  { icon: <WhatsAppIcon  fontSize="small" />, label: "WhatsApp",  href: "https://wa.me/918764412948"                  },
  { icon: <PhoneIcon     fontSize="small" />, label: "Phone",     href: "tel:+918764412948"                           },
  { icon: <EmailIcon     fontSize="small" />, label: "Email",     href: "mailto:unimentsolutionsllp@gmail.com"        },
];

// ─── Tokens ───────────────────────────────────────────────────────────────────
const BG       = "#111827";                    // matches Navbar dark
const RED      = "#C0392B";                    // site red accent
const RED_DIM  = "rgba(192,57,43,0.18)";       // red tint for hover bg
const RED_BRD  = "rgba(192,57,43,0.40)";       // red border on hover
const TEXT_PRI = "#FFFFFF";
const TEXT_SEC = "rgba(255,255,255,0.58)";
const TEXT_MUT = "rgba(255,255,255,0.32)";
const DIVIDER  = "rgba(255,255,255,0.08)";

// ─── Component ────────────────────────────────────────────────────────────────
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <ThemeProvider theme={footerTheme}>
      <Box
        component="footer"
        sx={{
          backgroundColor: BG,
          borderTop: `4px solid ${RED}`,   // red top bar — matches AboutSection banner
          pt: { xs: 6, md: 8 },
          pb: { xs: 3, md: 4 },
        }}
      >
        <Container maxWidth="lg">

          {/* ── Top grid ── */}
          <Grid container spacing={{ xs: 5, md: 8 }}>

            {/* Brand column */}
            <Grid item xs={12} md={5}>
              <Link
                href="#home"
                underline="none"
                sx={{ display:"inline-flex", alignItems:"center", gap:1.5, mb:2.5 }}
              >
                <Box
                  component="img"
                  src={logo}
                  alt="Uniment Assignment"
                  sx={{
                    width: 40, height: 40,
                    borderRadius: "10px",
                    objectFit: "cover",
                    border: "1px solid rgba(255,255,255,0.10)",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
                  }}
                />
                <Box>
                  <Typography sx={{
                    fontSize: "15px", fontWeight: 700,
                    color: TEXT_PRI, lineHeight: 1.2,
                    fontFamily: "'Inter', sans-serif",
                    letterSpacing: "-0.01em",
                  }}>
                    Uniment Assignment
                  </Typography>
                  <Typography sx={{
                    fontSize: "9px", fontWeight: 600,
                    letterSpacing: "0.20em", textTransform: "uppercase",
                    color: TEXT_MUT, marginTop: "2px",
                  }}>
                    Academic Excellence
                  </Typography>
                </Box>
              </Link>

              <Typography variant="body2" sx={{
                color: TEXT_SEC, lineHeight: 1.85,
                fontSize: "13px", maxWidth: 320, mb: 3,
              }}>
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
                      width: 36, height: 36,
                      borderRadius: "8px",
                      border: "1px solid rgba(255,255,255,0.08)",
                      background: "rgba(255,255,255,0.04)",
                      color: TEXT_SEC,
                      transition: "all 0.2s",
                      "&:hover": {
                        background: RED_DIM,
                        borderColor: RED_BRD,
                        color: "#e87060",
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
                <Typography sx={{
                  fontSize: "10px", fontWeight: 700,
                  letterSpacing: "0.20em", textTransform: "uppercase",
                  color: TEXT_MUT, mb: 2.5,
                }}>
                  {col.heading}
                </Typography>

                <Stack spacing={1.4}>
                  {col.links.map((l) => (
                    <Link
                      key={l.label}
                      href={l.href}
                      underline="none"
                      target={l.href.startsWith("http") || l.href.startsWith("mailto") || l.href.startsWith("tel") ? "_blank" : undefined}
                      rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      sx={{
                        fontSize: "13px", fontWeight: 400,
                        color: TEXT_SEC,
                        display: "inline-flex", alignItems: "center", gap: "6px",
                        transition: "color 0.18s",
                        "&:hover": { color: "#e87060" },
                      }}
                    >
                      {l.label}
                    </Link>
                  ))}
                </Stack>
              </Grid>
            ))}
          </Grid>

          {/* ── Contact strip ── */}
          <Box sx={{
            mt: { xs: 5, md: 6 },
            p: "20px 24px",
            borderRadius: "8px",
            background: "rgba(192,57,43,0.07)",
            border: "1px solid rgba(192,57,43,0.18)",
            display: "flex", flexWrap: "wrap", gap: 3,
            alignItems: "center", justifyContent: "space-between",
          }}>
            <Typography sx={{ fontSize:"12px", fontWeight:600, color: TEXT_SEC, letterSpacing:".04em" }}>
              Need help right now?
            </Typography>
            <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
              {[
                { icon: <PhoneIcon sx={{ fontSize:14 }} />, text: "+91 98765 43210", href: "tel:+918764412948" },
                { icon: <WhatsAppIcon sx={{ fontSize:14 }} />, text: "WhatsApp Us", href: "https://wa.me/918764412948" },
                { icon: <EmailIcon sx={{ fontSize:14 }} />, text: "unimentsolutionsllp@gmail.com", href: "mailto:unimentsolutionsllp@gmail.com" },
              ].map((item) => (
                <Link
                  key={item.text}
                  href={item.href}
                  underline="none"
                  sx={{
                    display: "inline-flex", alignItems: "center", gap: "6px",
                    fontSize: "12px", fontWeight: 600,
                    color: "#e87060",
                    transition: "color 0.18s",
                    "&:hover": { color: "#FFFFFF" },
                  }}
                >
                  {item.icon}{item.text}
                </Link>
              ))}
            </Stack>
          </Box>

          {/* ── Divider ── */}
          <Divider sx={{ borderColor: DIVIDER, mt: { xs: 4, md: 5 }, mb: 3 }} />

          {/* ── Bottom bar ── */}
          <Box sx={{
            display: "flex", alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap", gap: 2,
          }}>
            <Typography sx={{ fontSize:"12px", color: TEXT_MUT }}>
              © {year} Uniment Assignment. All rights reserved.
            </Typography>

            {/* Verified badge */}
            <Chip
              size="small"
              icon={
                <FiberManualRecordIcon sx={{
                  fontSize: "8px !important",
                  color: "#4CAF50 !important",
                  animation: "pulse 2s ease-in-out infinite",
                  "@keyframes pulse": {
                    "0%, 100%": { opacity:1, transform:"scale(1)"   },
                    "50%":       { opacity:.5, transform:"scale(1.4)" },
                  },
                }} />
              }
              label="All experts verified & active"
              sx={{
                height: 26, px: 0.5,
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
                color: TEXT_MUT,
                fontSize: "11px", fontWeight: 500,
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