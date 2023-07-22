import { useState } from "react";
import { nanoid } from "nanoid";
import { toast } from "react-toastify";

export default function AddFoodItem() {
  const [foodId, setFoodId] = useState(0);
  const [title, setTitle] = useState("");
  const [subTitle, setSubtitle] = useState("");
  const [price, setPrice] = useState("");
  const [star, setStar] = useState("");
  const [aboutFood, setAboutFood] = useState("");
  const [foodList, setFoodList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);

  function resetFieldValue() {
    setTitle("");
    setSubtitle("");
    setPrice("");
    setStar("");
    setAboutFood("");
    setIsEditing(false);
  }

  function deleteFoodItems(foodIdToBeDelete) {
    setFoodList(foodList.filter((food) => food.id !== foodIdToBeDelete));

    toast.success("Successfully Deleted!");
  }

  function editFoodItems(food) {
    setIsEditing(true);
    setFoodId(food.id);
    setTitle(food.title);
    setSubtitle(food.subTitle);
    setPrice(food.price);
    setStar(food.star);
    setAboutFood(food.aboutFood);
  }

  function updateFood(event) {
    event.preventDefault();

    setFoodList(
      foodList.map((food) => {
        if (food.id === foodId) {
          return {
            ...food,
            title: title,
            subTitle: subTitle,
            price: price,
            star: star,
            aboutFood: aboutFood,
          };
        } else {
          return food;
        }
      })
    );
    resetFieldValue();
    toast.success("Successfully Updated!");
  }

  return (
    <>
      <section className="sectionX">
        <h1 className="txt-primary">Add New Food Item</h1>
        <p>Please fill out the details to add a new food item.</p>
        <form
          onSubmit={
            isEditing
              ? (event) => updateFood(event)
              : (event) => {
                  event.preventDefault();
                  console.log("Form Submitted");
                  setFoodList([
                    ...foodList,
                    {
                      id: nanoid(),
                      title: title,
                      subTitle: subTitle,
                      price: price,
                      star: star,
                      aboutFood: aboutFood,
                    },
                  ]);

                  resetFieldValue();
                  toast.success("Successfully added!");
                }
          }
        >
          <div className="form-field">
            <input
              id="title"
              type="text"
              placeholder="Ex. Pasta"
              required
              value={title}
              onChange={(event) => {
                setTitle(event.target.value);
              }}
            />
            <label htmlFor="title">Title</label>
          </div>

          <div className="form-field">
            <input
              id="subTitle"
              type="text"
              placeholder="Ex. Served with french fries + drink"
              required
              value={subTitle}
              onChange={(event) => {
                setSubtitle(event.target.value);
              }}
            />
            <label htmlFor="subTitle">Sub Title</label>
          </div>

          <div className="form-field">
            <input
              id="price"
              type="text"
              placeholder="Ex. 120"
              required
              value={price}
              onChange={(event) => {
                setPrice(event.target.value);
              }}
            />
            <label htmlFor="price">Price</label>
          </div>

          <div className="form-field">
            <input
              id="star"
              type="number"
              min={1}
              max={5}
              placeholder="Ex. 1 to 5"
              value={star}
              onChange={(event) => {
                setStar(event.target.value);
              }}
            />
            <label htmlFor="star">Star</label>
          </div>

          <div className="form-field">
            <textarea
              id="description"
              type="text"
              placeholder="Please enter description here..."
              required
              value={aboutFood}
              onChange={(event) => {
                setAboutFood(event.target.value);
              }}
            />
            <label htmlFor="description">About Food</label>
          </div>

          <div className="buttonX-grp">
            <button className="buttonX" type="submit">
              {isEditing ? "Update Food" : "Add Food"}
            </button>
            <button className="buttonX" type="reset" onClick={resetFieldValue}>
              Cancel
            </button>
          </div>
        </form>
      </section>
      <section className="food-list sectionX">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Subtitle</th>
              <th>Price</th>
              <th>star</th>
              <th>About Food</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {foodList.map((food, index) => (
              <tr key={food.title}>
                <td>{index + 1}</td>
                <td>{food.title}</td>
                <td>{food.subTitle}</td>
                <td>{food.price}</td>
                <td>{food.star}</td>
                <td>{food.aboutFood}</td>
                <td>
                  <button type="button" onClick={() => editFoodItems(food)}>
                    Edit
                  </button>
                  <button
                    type="button"
                    onClick={() => deleteFoodItems(food.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {foodList.length === 0 && <p>Hmmm....Add the Food!! </p>}
      </section>
    </>
  );
}