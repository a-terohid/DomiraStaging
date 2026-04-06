"use client"

import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}

        {/* Load RealtyFeed Script */}
        <Script
          src="https://static.realtyfeed.com/demo/index.js"
          strategy="afterInteractive"
          onLoad={() => {
              window.rfWidgets = window.rfWidgets || {};
window.rfWidgets.config = {
  apiKey: "vPDTu21jFn7JvbrjlVThL5JJXbQbDbzia67dZYlJ",
  clientID: "pvn0hmr28cb33ib1et0oh29q7",
  walkScoreKey: "d4c883abf92f15a92f431dd1abe809ce",
  locationKey: 'AIzaSyC9hWjz0T6bpbEKZsOvh1pVu6BlGb95kfo',
  mapKey: 'AIzaSyC9hWjz0T6bpbEKZsOvh1pVu6BlGb95kfo',
  listingsPage: "/",
  propertyDetailsPage: "/propertydetails",
  comparePage: "/compare",
	styles: {
          isSquare: false,
        },
  "featured-listings-1": {
    widgetType: "FeaturedListings",
    layout : "Domira",
    filters: {
      sortBy: { label: "Latest", value: "OriginalEntryTimestamp desc" },
      city: "",
      propertyType: {
        Residential: [],
        Commercial: [],
      },
      priceRange: ["499000", "11500000"],
      listOfficeName: "",
      subDivision: "",
    },
    carousel: {
      enabled: true,
      infinite: true,
      dots: true,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 3000,
    },
    total: 8,
    propertyCard: {
      sqftType: "livingArea",
      share: true,
      compare: true,
      save: true,
      beds: true,
      baths: true,
      sqft: true,
      listOfficeName: true,
      subDivision: true,
    },
    styles: {
      // primaryColor: "#31572c",
      // secondaryColor : "#ecf39e"
    },
  },
  "featured-listings-2": {
    widgetType: "FeaturedListings",
    layout : "Domira",
    filters: {
      sortBy: { label: "Latest", value: "OriginalEntryTimestamp desc" },
      city: "",
      propertyType: {
        Residential: [],
        Commercial: [],
      },
      priceRange: ["499000", "11500000"],
      listOfficeName: "",
      subDivision: "",
    },
    carousel: {
      enabled: false,
      infinite: true,
      dots: true,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 3000,
    },
    total: 8,
    propertyCard: {
      sqftType: "livingArea",
      share: true,
      compare: true,
      save: true,
      beds: true,
      baths: true,
      sqft: true,
      listOfficeName: true,
      subDivision: true,
    },
    styles: {
      // primaryColor: "#31572c",
      // secondaryColor : "#ecf39e"
    },
  },
  "searchbar-1": {
    widgetType: "SearchBar",
    styles: {
      height: "48px",
    },
  },
  "listings-widget-1": {
    widgetType: "Listings",
		layout : "Domira",
		DisplayDisplaySearchSectionBanner : true,
		SearchSectionBannerContent : {
			top : "-9px",
			showGradient : true,
		},
		doNotDisplayListingsWithoutImages : true,
    total: 12,
mapZoom: 8,
 mapCenter: {
            lat: 42.08338057931751,
            lng: -74.3400907411951,
     },
    propertyCard: {
      sqftType: "livingArea",
      share: true,
      compare: true,
      save: true,
      beds: true,
      baths: true,
      sqft: true,
    },
    filters: {
       "city": "",
			"StandardStatus": "",
// 			rfQuery : "PostalCode eq '60630'",
// 			zipCode : [],
      listingsType: {
        enabled: true,
      },
      propertyType: {
        enabled: true,
        propertyTypeEditable: true,
        propertyTypeValues: {
          Residential: [],
          Commercial: [],
        },
      },
      priceRange: {
        enabled: true,
        priceRangeValue: [],
      },
      sizeRange: {
        type: ["livingArea", "buildingArea"],
        enabled: true,
      },
      bedBath: {
        enabled: true,
      },
      listOfficeName: "",
      subDivision: "",
    },
    styles: {
      defaultView: "",
      // primaryColor: "#31572c",
      // secondaryColor : "#ecf39e"
    },
  },
  "property-details-1": {
    widgetType: "PropertyDetails",
    layout : "Domira",
		actions:{
            saveProperty: true,
            shareProperty: true,
            compareProperty: true,
            notes: true,
          },
    mortgageSection: true,
    contactSection: true,
    agentSection: true,
    shareSection : false,
    walkScore: true,
    greatSchools: true,
    details: {
      schools: true,
      beds: true,
      baths: true,
      livingArea: true,
      lotArea: true,
      buildingArea: true,
      garage: true,
      mlsArea: true,
      subDivision: true,
      driveIn: true,
      truckLevel: true,
      clearHeight: true,
    },
    overview: [
  "status",
  "listingType",
  "beds",
  "baths",
  "livingArea",
  "buildingArea",
  "lotArea",
  "garage",
  "driveIn",
  "truckLevel",
  "clearHeight"
],
    propertyCard: {
      sqftType: "livingArea",
      share: false,
      compare: false,
      save: false,
      beds: true,
      baths: true,
      sqft: true,
    },
    styles: {
      // primaryColor: "#31572c",
      // secondaryColor : "#ecf39e"
    },
  },
  "compare-1": {
    widgetType: "Compare",
    layout : "Domira",
		DisplayDisplayBanner : true,
        disableMap : false,
		BannerContent : {
			top : "-9px",
			showGradient : true,
		},
    styles: {
      // primaryColor: "#31572c",
      // secondaryColor : "#ecf39e"
    },
  },
  "saved-listings-1": {
    widgetType: "SavedListings",
    propertyCard: {
      sqftType: "livingArea",
      share: true,
      compare: true,
      save: true,
      beds: true,
      baths: true,
      sqft: true,
    },
     layout : "Domira",
		DisplayDisplayBanner : true,
        disableMap : false,
		BannerContent : {
			top : "-9px",
			showGradient : true,
		},
    styles: {
      // primaryColor: "#31572c",
      // secondaryColor : "#ecf39e"
    },
  },
};
            }}
        />
      </body>
    </html>
  );
}
