import CardWithHeader from "../ui/card-with-header";

const OrderInformation = () => {
  return (
    <CardWithHeader title="Order Information">
      <div className="p-5">
        <div className="input-group">
          <label htmlFor="full_name">Full Name</label>
          <input type="text" id="full_name" placeholder="Type your full name" />
        </div>
        <div className="input-group">
          <label htmlFor="wa_number">Whatsapp Number </label>
          <input
            type="text"
            id="wa_number"
            placeholder="Type your whatsapp number"
          />
        </div>
        <div className="input-group">
          <label htmlFor="street">Shipping Address</label>
          <textarea
            id="street"
            placeholder="Type your shipping address"
            rows={7}
          />
        </div>
      </div>
    </CardWithHeader>
  );
};

export default OrderInformation;
