import { useSelector } from "react-redux"
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: '#E4E4E4'
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1
    }
});

export default function Preview() {

    const data = useSelector(state => state)
    const { firstname, lastname, email, phone, location, designation } = data.personal
    return (
        <>
            <Document>
                <Page size="A4" style={styles.page}>
                    <View style={styles.section}>
                        <Text>Section #1</Text>
                    </View>
                    <View style={styles.section}>
                        <Text>Section #2</Text>
                    </View>
                </Page>
            </Document>
            {/* <div className="flex">
                <div className="basis-3/5 pr-4">
                    <h1 className="text-4xl font-semibold mb-2">{firstname} {lastname}</h1>
                    <p className="text-sm">A committed, responsible, introvert and smart working individual, I can work well both in a team environment and on my own initiative. I am a mature team worker who can adapt to challenging situations.</p>
                </div>
                <div className="basis-2/5 pl-4 pt-2">
                    <p>{location}</p>
                    <p>{phone}</p>
                    <a href={`mailto:` + email}>{email}</a>
                </div>
            </div> */}
        </>
    )
}
