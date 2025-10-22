import { Grid, GridItem } from "@/components/ui/grid";
import PrayerTimes from "../../components/PrayerTimes.jsx";
import { CustomScrollDown } from "@/components/customScrollDown/CustomScrollDown.jsx";

export default function PrayerTimesPage() {
  return (
    <Grid className="grid-4 grid-cols-10">
      <GridItem className="col-span-10">
        <CustomScrollDown>
          <PrayerTimes />
        </CustomScrollDown>
      </GridItem>
    </Grid>
  )
}
