'use client'
import Hero from "@/components/Hero";
import { CarCard, CustomFilter, Navbar, ShowMore } from "@/components/index";
import { SearchBar } from "@/components/index";
import { fetchCars } from "@/utils/index";
import { fuels, yearsOfProduction } from "@/constants/index";
import { HomeProps } from "@/types/index";

export default async function Home({ searchParams }: HomeProps) {
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 10,
    model: searchParams.model || "",
  });
 

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;
  return (
    <main className="overflow-hidden">

      <Navbar />
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">CAR LIST FOR RENT</h1>
        <p className="text-xl font-extrabold">Search Here</p>
        </div>
        <div className="home__filters">
          <SearchBar
         
          />

            <CustomFilter title="fuel" options={fuels}  />
          <div className="home__filter-container">
            <CustomFilter title="year" options={yearsOfProduction}  />
          </div>
        </div>
        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car) => (
                <CarCard car={car} />
              ))}
            </div>
       
            <ShowMore
                pageNumber={(searchParams.limit || 10) / 10}
                isNext={(searchParams.limit || 10) > allCars.length}
              
            />
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl">Opps no result found</h2>
            <p>{allCars?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}
