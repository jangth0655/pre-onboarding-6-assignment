interface Props {
  name: string | number | boolean;
}

const TdItem = ({ name }: Props) => {
  return <td className="text-center px-4 py-2">{name}</td>;
};
export default TdItem;
