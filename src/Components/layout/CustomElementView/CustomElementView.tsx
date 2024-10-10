
interface CustomElementViewProps {
    label: string | null | undefined,
    value: string | null | undefined
}


const CustomElementView: React.FC<CustomElementViewProps> = ({ value}) => {

    return (       
         <h3>{value}</h3>
    );

}


export default CustomElementView;