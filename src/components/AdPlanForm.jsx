import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

// 表单校验规则
const schema = yup.object().shape({
  budget: yup.number().positive('预算不能为负数').required('预算是必填项'),
  targeting: yup.string().required('定向条件是必填项')
});

const AdPlanForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>预算：</label>
      <input type="number" {...register('budget')} />
      {errors.budget && <p>{errors.budget.message}</p>}

      <label>定向条件：</label>
      <input type="text" {...register('targeting')} />
      {errors.targeting && <p>{errors.targeting.message}</p>}

      <button type="submit">提交</button>
    </form>
  );
};

export default AdPlanForm;