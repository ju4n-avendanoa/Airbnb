import {
  ArrowLeftCircleIcon,
  BoltIcon,
  CakeIcon,
  HandThumbUpIcon,
  TruckIcon,
  TvIcon,
  WifiIcon,
} from "@heroicons/react/24/solid";

function Perks({ selected, setPerks }) {
  const handleChangePerk = ({ target }) => {
    const { checked, name } = target;

    if (checked) {
      setPerks((prev) => [...prev, name]);
    } else {
      setPerks((prev) => prev.filter((item) => item !== name));
    }
  };

  return (
    <div className="my-2">
      <h2 className="font-bold">Perks</h2>
      <p className="text-gray-500">select all the perks of your place</p>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-2 py-2 h-auto">
        <label htmlFor="wi-fi" className="perks">
          <input
            type="checkbox"
            name="Wi-fi"
            checked={selected.includes("Wi-fi")}
            onChange={handleChangePerk}
            id="wi-fi"
          />
          <WifiIcon className="h-6" />
          Wi-fi
        </label>
        <label htmlFor="Pet" className="perks">
          <input
            type="checkbox"
            name="Pet friendly"
            checked={selected.includes("Pet friendly")}
            onChange={handleChangePerk}
            id="Pet"
            className="check"
          />
          <HandThumbUpIcon className="h-6" />
          Pet&nbsp;friendly
        </label>
        <label htmlFor="parking" className="perks">
          <input
            type="checkbox"
            name="Free parking spot"
            checked={selected.includes("Free parking spot")}
            onChange={handleChangePerk}
            id="parking"
            className="check"
          />
          <TruckIcon className="h-6" />
          Free&nbsp;parking&nbsp;spot
        </label>
        <label htmlFor="tv" className="perks">
          <input
            type="checkbox"
            name="TV"
            checked={selected.includes("TV")}
            onChange={handleChangePerk}
            id="tv"
            className="check"
          />
          <TvIcon className="h-6" />
          TV
        </label>
        <label htmlFor="entrance" className="perks">
          <input
            type="checkbox"
            name="Private entrance"
            checked={selected.includes("Private entrance")}
            onChange={handleChangePerk}
            id="entrance"
            className="check"
          />
          <ArrowLeftCircleIcon className="h-6" />
          Private&nbsp;entrance
        </label>
        <label htmlFor="Kitchen" className="perks">
          <input
            type="checkbox"
            name="Kitchen"
            checked={selected.includes("Kitchen")}
            onChange={handleChangePerk}
            id="Kitchen"
            className="check"
          />
          <CakeIcon className="h-6" />
          Kitchen
        </label>
        <label htmlFor="Washer" className="perks">
          <input
            type="checkbox"
            name="Washer"
            checked={selected.includes("Washer")}
            onChange={handleChangePerk}
            id="Washer"
            className="check"
          />
          <BoltIcon className="h-6" />
          Washer
        </label>
      </div>
    </div>
  );
}

export default Perks;
