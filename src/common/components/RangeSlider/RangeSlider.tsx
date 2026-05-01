
import s from "./RangeSlider.module.css";
import type {ChangeEvent} from "react";

type Props = {
  min?: number;
  max?: number;
  step?: number;
  values: [number, number];
  onChange: (values: [number, number]) => void;
};

export const RangeSlider = ({
                              min = 0,
                              max = 10,
                              step = 0.1,
                              values,
                              onChange,
                            }: Props) => {
  const getPercent = (value: number) =>
    ((value - min) / (max - min)) * 100;

  const handleChange = (
    e: ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const newValue = Number(e.target.value);
    const newValues: [number, number] = [...values];

    if (index === 0) {
      newValues[0] = Math.min(newValue, values[1]);
    } else {
      newValues[1] = Math.max(newValue, values[0]);
    }

    onChange(newValues);
  };

  const minPercent = getPercent(values[0]);
  const maxPercent = getPercent(values[1]);

  return (
    <div className={s.wrapper}>
      <div className={s.track}>
        <div
          className={s.range}
          style={{
            left: `${minPercent}%`,
            width: `${maxPercent - minPercent}%`,
          }}
        />
      </div>

      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={values[0]}
        onChange={(e) => handleChange(e, 0)}
        className={`${s.thumb} ${s.thumbLeft}`}
      />

      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={values[1]}
        onChange={(e) => handleChange(e, 1)}
        className={`${s.thumb} ${s.thumbRight}`}
      />

      <div className={s.values}>
        {values[0].toFixed(1)} – {values[1].toFixed(1)}
      </div>
    </div>
  );
};