import ClientOnly from "../components/ClientOnly";
import SectionHeading from "../components/SectionHeader";


const MediaPage = async () => {
        return(
            <ClientOnly>
                <SectionHeading title='Media'/>
            </ClientOnly>
        )  
}

export default MediaPage;