import Image from "next/image";

export default function Home() {
  return (
    <div className=" container pb-8">
      <div id="rfWidgets" config="listings-widget-1" widget="Listings"></div>
      {/* <div className="mt-12" >
        <h1>featuredlistings</h1>
        <div id="rfWidgets" config= "featured-listings-2" widget="FeaturedListings"></div>
      </div> */}
    </div>
  );
}
