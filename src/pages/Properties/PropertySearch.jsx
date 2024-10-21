import MarginBox from "../../components/MarginedBox";
import Paper from "../../components/Paper";
import Button from "../../components/Button";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MapsHomeWorkIcon from "@mui/icons-material/MapsHomeWork";
import PriceChangeIcon from "@mui/icons-material/PriceChange";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CustomTextField from "../../components/CustomTextField";
import { InputAdornment, Stack, TextField, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
const PropertySearch = () => {
  return (
    <MarginBox
      sx={{
        position: "relative",
        top: { laptop: -50 },
        paddingBlock: { mobile: 6, laptop: 0 },
      }}
    >
      <Stack
        gap={{
          mobile: 2,
          laptop: 0,
        }}
      >
        <Paper
          sx={{
            padding: { mobile: 0.5, laptop: 2 },
            width: { mobile: "100%", laptop: "90%" },
            marginInline: "auto",
          }}
        >
          <TextField
            fullWidth
            placeholder="Enter your email"
            variant="outlined"
            sx={{
              backgroundColor: "background.default",
            }}
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment
                    position="end"
                    sx={{
                      paddingBlock: 1,
                      maxHeight: "inherit",
                    }}
                  >
                    <Button>
                      <SearchIcon />
                      <Typography
                        sx={{
                          display: {
                            mobile: "none",
                            laptop: "block",
                          },
                          marginLeft: 1,
                        }}
                      >
                        Find Property
                      </Typography>
                    </Button>
                  </InputAdornment>
                ),
              },
            }}
          />
        </Paper>
        <Paper sx={{ padding: 2 }}>
          <Stack
            gap={2}
            sx={{
              flexDirection: {
                mobile: "column",
                laptop: "row",
              },
            }}
          >
            <CustomTextField
              placeholder="Location"
              startAdornment={<LocationOnIcon />}
              endAdornment={<KeyboardArrowDownIcon />}
              sx={{
                backgroundColor: "background.default",
              }}
            />
            <CustomTextField
              placeholder="Property Type"
              startAdornment={<MapsHomeWorkIcon />}
              endAdornment={<KeyboardArrowDownIcon />}
              sx={{
                backgroundColor: "background.default",
              }}
            />
            <CustomTextField
              placeholder="Price Range"
              startAdornment={<PriceChangeIcon />}
              endAdornment={<KeyboardArrowDownIcon />}
              sx={{
                backgroundColor: "background.default",
              }}
            />
            <CustomTextField
              placeholder="Property Size"
              startAdornment={<ViewInArIcon />}
              endAdornment={<KeyboardArrowDownIcon />}
              sx={{
                backgroundColor: "background.default",
              }}
            />
            <CustomTextField
              placeholder="Build year"
              startAdornment={<CalendarTodayIcon />}
              endAdornment={<KeyboardArrowDownIcon />}
              sx={{
                backgroundColor: "background.default",
              }}
            />
          </Stack>
        </Paper>
      </Stack>
    </MarginBox>
  );
};

export default PropertySearch;
