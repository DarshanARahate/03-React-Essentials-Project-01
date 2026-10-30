export default function TabButton({ onSelect, children, isSelected }) {

    console.log('TABBUTTON COMPONENT EXECUTING');

    return (<li><button className={isSelected ? 'active' : undefined} onClick={onSelect}>{children}</button></li>);


}  