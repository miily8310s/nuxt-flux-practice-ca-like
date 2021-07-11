const formData = {
  message: 'ok',
  data: {
    personal: {
      name: 'taro yamamoto',
      age: 22,
      items: [
        { title: 'name', type: 'text' },
        { title: 'age', type: 'number' },
      ],
    },
    survey: {
      health: 'good',
      motivation: 'good',
      remarks: 'hoge',
      items: [
        { title: 'health', type: 'text' },
        { title: 'motivation', type: 'text' },
        { title: 'remarks', type: 'text' },
      ],
    },
  },
};

export default formData;
