import Card from './Card';

const QuoteCard = () => {
  return (
    <Card>
      <h2 className="text-lg font-bold">Quote of the Day</h2>
      <p>"The only way to do great work is to love what you do."</p>
      <p className="italic">- Steve Jobs</p>
    </Card>
  );
};

export default QuoteCard;
