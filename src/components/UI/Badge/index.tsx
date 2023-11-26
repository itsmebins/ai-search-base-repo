
import { spanColors } from 'utils/uiClasses' 
interface Props {
    label: string;
    mode?:
    | "primary"
    | "success"
    | "secondary"
    | "pink"
    className?: string;

}
// https://tailwindcss.com/docs/content-configuration#dynamic-class-names
export const Badge: React.FC<Props> = ({ label, mode = 'primary' }) => {
    return (
        <span className={`${spanColors[mode|| 'primary']} inline-flex items-center rounded-md  px-2 py-1 
        text-xs font-medium ring-1 ring-inset `} >
            {label}
        </span>
    )
};
