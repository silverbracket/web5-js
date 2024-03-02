import { Web5 } from '@tbd54566975/web5';
import { Level } from 'level';
import { Todo } from './todo.type';

const todoDWNRegistry = {
  schema     : 'http://todo-schema-registry.org/todo',
  dataFormat : 'application/json',
};

const { schema, dataFormat } = todoDWNRegistry;

const store = new Level('data/app/storage');

console.log(await store.get('WEB5_APP_DID'));

const { web5, did: aliceDid } = await Web5.connect({
  //   techPreview: {
  //     dwnEndpoints: ["https://dwn.your-domain.org/"],
  //   },
});

// console.log(aliceDid);

export const createTodo = async () => {
  const { record } = await web5.dwn.records.create({
    data    : {},
    message : {
      schema,
      dataFormat,
    },
  });
  return record;
};

export const getAllTodos = async (): Promise<Todo[]> => {
  const { records = [] } = await web5.dwn.records.query({
    message: {
      filter: {
        schema,
      },
    },
  });
  for (const record of records) {
    const data = await record.data.text();
    console.log(data);
  }
  return [
    {
      id          : '1',
      description : 'deploy code to cf',
    },
  ];
};
