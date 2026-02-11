import { use} from "react";
import { AuthContext } from "../../context/AuthContext";
import toast from "react-hot-toast";

const AddMovie = () => {

  const { user } = use(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const formData = {
      title: form.title.value,
      genre: form.genre.value,
      plotSummary: form.plotSummary.value,
      posterUrl: form.posterUrl.value,
      releaseYear: form.releaseYear.value,
      rating: form.rating.value,
      addedBy: user?.email
    };

    console.log(formData);

    toast.success("Movie Added Successfully!");

    form.reset();
  };

  return (
    <div className="min-h-screen bg-green-700 flex items-center justify-center p-6">
      
      <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-2xl">
        
        <h2 className="text-2xl font-bold text-center mb-6 text-green-700">
          Add New Movie
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Title */}
          <div>
            <label className="font-medium">Title</label>
            <input
              type="text"
              name="title"
              required
              className="w-full p-2 rounded-full border focus:outline-green-600"
              placeholder="Enter movie title"
            />
          </div>

          {/* Genre */}
          <div>
            <label className="font-medium">Genre</label>
            <select
              name="genre"
              required
              defaultValue=""
              className="w-full p-2 rounded-full border focus:outline-green-600"
            >
              <option value="" disabled>Select Genre</option>
              <option value="Action">Action</option>
              <option value="Comedy">Comedy</option>
              <option value="Drama">Drama</option>
              <option value="Horror">Horror</option>
              <option value="Romance">Romance</option>
            </select>
          </div>

          {/* Plot Summary */}
          <div>
            <label className="font-medium">Plot Summary</label>
            <textarea
              name="plotSummary"
              required
              rows="3"
              className="w-full p-3 rounded-2xl border focus:outline-green-600"
              placeholder="Write plot summary..."
            ></textarea>
          </div>

          {/* Poster URL */}
          <div>
            <label className="font-medium">Poster URL</label>
            <input
              type="url"
              name="posterUrl"
              required
              className="w-full p-2 rounded-full border focus:outline-green-600"
              placeholder="https://example.com/poster.jpg"
            />
          </div>

          {/* Release Year */}
          <div>
            <label className="font-medium">Release Year</label>
            <input
              type="number"
              name="releaseYear"
              required
              className="w-full p-2 rounded-full border focus:outline-green-600"
              placeholder="2025"
            />
          </div>

          {/* Rating */}
          <div>
            <label className="font-medium">Rating (1-5)</label>
            <input
              type="number"
              name="rating"
              min="1"
              max="5"
              step="0.1"
              required
              className="w-full p-2 rounded-full border focus:outline-green-600"
              placeholder="4.5"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-full hover:bg-green-800 transition"
          >
            Add Movie
          </button>

        </form>

      </div>
    </div>
  );
}

export default AddMovie;