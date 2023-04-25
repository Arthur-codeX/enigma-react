import Card from "./Card";

import SampleItems from "./sampleItems";
// Array we need to map

const ItemSection = ({ setItems, items }) => {
  // Map through all items.

  return (
    <div style={{ display: "flex", flex: 1, flexWrap: "wrap" }}>
      {SampleItems.map((doc) => {
        return (
          <Card key={doc.id} doc={doc} setItems={setItems} items={items} />
        );
      })}
    </div>
  );
};

export default ItemSection;
