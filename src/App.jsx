import React, { useState } from 'react';

function App() {

  const [tempProduct, setTempProduct] = useState(null);
  const [products, setProducts] = React.useState([
    {
      category: "甜甜圈",
      content: "尺寸：14x14cm",
      description: "濃郁的草莓風味，中心填入滑順不膩口的卡士達內餡，帶來滿滿幸福感！",
      id: "-L9tH8jxVb2Ka_DYPwng",
      is_enabled: 1,
      origin_price: 150,
      price: 99,
      title: "草莓莓果夾心圈",
      unit: "元",
      num: 10,
      imageUrl: "https://images.unsplash.com/photo-1583182332473-b31ba08929c8",
      imagesUrl: [
        "https://images.unsplash.com/photo-1626094309830-abbb0c99da4a",
        "https://images.unsplash.com/photo-1559656914-a30970c1affd"
      ]
    },
    {
      category: "蛋糕",
      content: "尺寸：6寸",
      description: "蜜蜂蜜蛋糕，夾層夾上酸酸甜甜的檸檬餡，清爽可口的滋味讓人口水直流！",
      id: "-McJ-VvcwfN1_Ye_NtVA",
      is_enabled: 1,
      origin_price: 1000,
      price: 900,
      title: "蜂蜜檸檬蛋糕",
      unit: "個",
      num: 1,
      imageUrl: "https://images.unsplash.com/photo-1627834377411-8da5f4f09de8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1001&q=80",
      imagesUrl: [
        "https://images.unsplash.com/photo-1618888007540-2bdead974bbb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=987&q=80",
      ]
    },
    {
      category: "蛋糕",
      content: "尺寸：6寸",
      description: "法式煎薄餅加上濃郁可可醬，呈現經典的美味及口感。",
      id: "-McJ-VyqaFlLzUMmpPpm",
      is_enabled: 0,
      origin_price: 700,
      price: 600,
      title: "暗黑千層",
      unit: "個",
      num: 15,
      imageUrl: "https://images.unsplash.com/photo-1505253149613-112d21d9f6a9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fGNha2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
      imagesUrl: [
        "https://images.unsplash.com/flagged/photo-1557234985-425e10c9d7f1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA5fHxjYWtlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
        "https://images.unsplash.com/photo-1540337706094-da10342c93d8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fGNha2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60"
      ]
    }
  ]);


  // 使用者可以查看產品列表
  // 使用者可以點擊單一產品，查看詳細資訊

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>

          <h2 className="text-2xl font-bold mb-4">產品列表</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-md font-medium text-gray-500 uppercase">產品名稱</th>
                  <th className="px-6 py-3 text-left text-md font-medium text-gray-500 uppercase">原價</th>
                  <th className="px-6 py-3 text-left text-md font-medium text-gray-500 uppercase">售價</th>
                  <th className="px-6 py-3 text-left text-md font-medium text-gray-500 uppercase">是否啟用</th>
                  <th className="px-6 py-3 text-left text-md font-medium text-gray-500 uppercase">查看細節</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {products.map((item) => (
                  <tr key={item.id}>
                    <td className="px-6 py-4">{item.title}</td>
                    <td className="px-6 py-4">{item.origin_price}</td>
                    <td className="px-6 py-4">{item.price}</td>
                    <td className="px-6 py-4">
                      {item.is_enabled ? <span className='text-sky-600'>已啟用</span> : <span className='text-red-500'>未啟用</span>}
                    </td>
                    <td className="px-6 py-4">
                      <button 
                        onClick={() => setTempProduct(item)} 
                        className="bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 rounded-md"
                      >
                        查看細節
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">單一產品細節</h2>
          {tempProduct ? (
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={tempProduct.imageUrl} className="w-full h-64 object-cover" alt="主圖" />
              <div className="p-6">
                <h5 className="text-xl font-bold mb-2">
                  {tempProduct.title}
                  <span className="ml-2 px-2 py-1 text-sm text-white bg-sky-600 rounded-full">{tempProduct.category}</span>
                </h5>
                <p className="text-gray-600 mb-2">商品描述：{tempProduct.description}</p>
                <p className="text-gray-600 mb-4">商品內容：{tempProduct.content}</p>
                <div className="flex items-center gap-2 mb-6">
                  <p className="text-gray-400 line-through">{tempProduct.origin_price}</p>
                  <p className="text-xl font-bold text-sky-600">{tempProduct.price} 元</p>
                </div>
                <h5 className="font-bold mb-3">更多圖片：</h5>
                <div className="grid grid-cols-2 gap-4">
                  {
                    tempProduct.imagesUrl.map((image, index) => {
                      return (
                        <img key={image + index} src={image} className="w-full h-32 object-cover rounded-md" alt="其他圖片" />
                      )
                    })
                  }
                </div>
              </div>
            </div>
          ) : (
            <p className="text-gray-500 text-center p-8 bg-gray-50 rounded-lg">請選擇一個商品查看</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
