import MedicineDetails from "@/app/components/MedicineDetails";


export default function page({ params }: { params: { id: string } }) {
    return (
        <MedicineDetails id={params.id}/>
    )
}