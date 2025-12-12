import AboutMosque from "@/app/components/AboutMosque";
import { CustomScrollDown } from "@/components/customScrollDown/CustomScrollDown";
import { Grid, GridItem } from "@/components/ui/grid";


function AboutUs() {
  return (
    <Grid className="grid-4 grid-cols-10">
      <GridItem className="col-span-10">
        <CustomScrollDown>
          <AboutMosque />
        </CustomScrollDown>
      </GridItem>
    </Grid>
  )
}

export default AboutUs;
