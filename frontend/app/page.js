import Banner from "@/components/banner";
import DataGrid from "@/components/data-grid";
import Form from "@/components/form";
import { getUniqueYears } from "@/lib/get-unique-years";
import axios from "axios";

const url = "http://localhost:3001/api/launchdata";

export default async function Home() {
    const response = await axios.get(url);
    const uniqueYears = getUniqueYears(response.data);

    return (
        <main>
            <Banner />
            <Form uniqueYears={uniqueYears} />
            <DataGrid />
        </main>
    );
}
