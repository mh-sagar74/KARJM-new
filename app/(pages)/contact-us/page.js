import VisitUs from "@/app/components/VisitUs";
import { CustomScrollDown } from "@/components/customScrollDown/CustomScrollDown";
import { Grid, GridItem } from "@/components/ui/grid";


export default function ContactUs() {
  return (
    <Grid className="grid-4 grid-cols-10">
      <GridItem className="col-span-10">
        <CustomScrollDown>
          <VisitUs />
        </CustomScrollDown>
      </GridItem>
    </Grid>
  )
}
