export default function Input({ label, elementType, ...props }) {
  const classes =
    'w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600';

  /** keep for later
   * purple 540d6e
   * redorange ee4266
   * yellow ffd23f
   * mint 3bceac
   */
  const options = [
    { id: 0 , optionValue: '', optionText: 'Choose a category' },
    { id: 1, optionValue: 'dev', optionText: 'Dev (own, guided, debug)' },
    { id: 2, optionValue: 'craft', optionText: 'Fiber or visual arts' },
    { id: 3, optionValue: 'home', optionText: 'House related (incl. pets)' },
    { id: 4, optionValue: 'other', optionText: 'Other' },
  ];

  let inputContent = <input className={classes} {...props} />;

  if (elementType === 'textarea') {
    inputContent = <textarea className={classes} {...props} />;
  } else if (elementType === 'select') {
    inputContent = (
      <select className={classes} {...props}>
        {options.map((el) => (
          <option key={el.id} value={el.optionValue}>{el.optionText}</option>
        ))}
      </select>
    );
  }
  return (
    <p className='flex flex-col gap-1 my-4'>
      <label className='text-sm font-bold uppercase text-stone-500' {...props}>
        {label}
      </label>
      {inputContent}
    </p>
  );
}
