import { Grid, GridItem } from "@/components/ui/grid";
import ServiceProgram from "../../components/ServiceProgram.jsx";
import { CustomScrollDown } from "@/components/customScrollDown/CustomScrollDown.jsx";

export default function PrayerTimesPage() {
  return (
    <Grid className="grid-4 grid-cols-10">
      <GridItem className="col-span-10">
        <CustomScrollDown>
          <ServiceProgram />
        </CustomScrollDown>
      </GridItem>
    </Grid>
  )
}
