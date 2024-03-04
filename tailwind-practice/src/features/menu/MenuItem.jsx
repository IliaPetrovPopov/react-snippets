import Button from '../../ui/Button';
import { formatCurrency } from '../../utils/helpers';

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  return (
    <li className="">
      <img
        src={imageUrl}
        alt={name}
        // className={`h-24 ${soldOut ? 'opacity-70 grayscale' : ''}`}
      />
      <div className="">
        <p className="">{name}</p>
        <p className="">
          {ingredients.join(', ')}
        </p>
        <div className="">
          {!soldOut ? (
            <p className="">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="">
              Sold out
            </p>
          )}

          <Button type="small">Add to cart</Button>
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
