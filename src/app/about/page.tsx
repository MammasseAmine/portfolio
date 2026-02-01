import { client } from "@/sanity/client";
import AboutClient from "./AboutClient";

export default async function AboutPage() {
    const [textData, statsData, realmsData] = await Promise.all([
        client.fetch('*[_type == "only_texts"][0]'),
        client.fetch('*[_type == "about_stats"][0]'),
        client.fetch('*[_type == "about_realms"][0]'),
    ]);

    return (
        <AboutClient
            sanityData={textData}
            statsData={statsData}
            realmsData={realmsData}
        />
    );
}
