import Layout from "components/Layout";
import Accordion from "components/Accordion";
import { PersonalContent, PersonalHeader } from "components/Personal";
import { WorkContent, WorkHeader } from "components/Work";
import Preview from "components/Preview";
import { useRef } from "react";



export default function ResumeBuilder() {
    const previewRef = useRef()

    console.log(previewRef.current);
    return <Layout>
        <section className="flex">
            <article className="basis-1/4">

            </article>
            <article className="basis-2/4 min-h-screen shadow-xl p-4 m-4">
                <div className="p-4" ref={previewRef}>
                    <Preview />
                </div>
            </article>
            <article className="basis-1/4 mx-4">
                <Accordion header={<PersonalHeader />}>
                    <PersonalContent />
                </Accordion>
                {/* <Accordion header={<WorkHeader />}>
                    <WorkContent />
                </Accordion> */}
            </article>
        </section>
    </Layout >
}