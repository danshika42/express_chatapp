const GenderCheckbox = ({gender,handleCheckboxChange}) => {
	return (
		<div className='flex'>
			<div className='form-control'>
				<label className={`label gap-2 cursor-pointer ${gender === "male" ? "selected" : ""} `}>
					<span className='label-text'>Male</span>
					<input checked={gender==="male"} onChange={()=>handleCheckboxChange("male")} type='checkbox' className='checkbox border-slate-900' />
				</label>
			</div>
			<div className='form-control'>
				<label className={`label gap-2 cursor-pointer ${gender === "female" ? "selected" : ""} `}>
					<span className='label-text'>Female</span>
					<input checked={gender==="female"} onChange={()=>handleCheckboxChange("female")} type='checkbox' className='checkbox border-slate-900' />
				</label>
			</div>
		</div>
	);
};
export default GenderCheckbox;
