import { Drawer } from "components/UI";
type MobileNavMenuProps = {
    isOpen: boolean;
    classNameName?: string;
    onClose: (value: boolean) => void;
};

const MobileNavMenu: React.FC<MobileNavMenuProps> = ({ onClose, isOpen }) => {
    return (
        <Drawer isOpen={isOpen} onClose={() => onClose(false)} position="left" drawerId="mobile-drawer-id">
            <div>
                <nav className="flex flex-col gap-1 min-w-[240px] p-2 text-lg font-bold">
                    <div role="button" tabIndex={0}
                        className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:text-primary hover:bg-opacity-80  outline-none focus:text-primary" >Inbox</div>
                </nav>
            </div>
        </Drawer>
    );
};

export default MobileNavMenu;
