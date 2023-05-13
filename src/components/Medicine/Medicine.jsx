import React from 'react';
import ReactToPdf from 'react-to-pdf';

const Medicine = () => {
  const ref = React.createRef();

  return (
    <div>
      <div>
        <ReactToPdf targetRef={ref} filename='div-blue.pdf'>
          {({ toPdf }) => <button onClick={toPdf}>Generate pdf</button>}
        </ReactToPdf>
      </div>
      <div style={{  background: 'blue' }} ref={ref}>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima iure
          amet neque cupiditate illo saepe optio similique, quod placeat,
          dolores natus, corporis sunt. Assumenda, officia nisi facilis
          consequatur id dignissimos, illum hic perferendis aliquam a
          reprehenderit corrupti, tempora voluptate autem cumque sunt quis quos!
          Fuga illum nulla voluptatibus sint aliquid blanditiis quia alias amet,
          maxime nostrum velit atque et dicta in beatae eos inventore eveniet
          possimus doloribus. Minus itaque odio tenetur debitis. Quod quasi
          expedita nulla, saepe quam autem architecto dolore quibusdam
          laboriosam. Dolor commodi aliquid, repellendus consectetur maiores ad
          suscipit, corporis fugiat quis rem temporibus nobis ipsam! Rem
          recusandae nulla quam saepe, sed est ea aspernatur! Labore atque
          assumenda ad provident ratione debitis culpa laborum, soluta aliquam
          unde nobis numquam sit. Sed obcaecati tenetur eaque corporis
          dignissimos voluptate quam voluptatum, assumenda aliquam ullam placeat
          impedit odit? Laboriosam consequatur possimus non earum repellendus
          dolores animi debitis! Voluptates alias accusamus vero incidunt.
          Architecto a nostrum optio? Unde laboriosam odio a, ducimus sequi,
          quaerat harum eligendi eum aliquid voluptatum, ab reprehenderit
          commodi distinctio libero dicta laudantium corrupti? Tenetur explicabo
          quo laudantium ipsam quisquam eveniet, dicta deserunt voluptatem
          pariatur alias. Facere, sed. Excepturi hic corrupti incidunt
          laudantium perferendis totam assumenda modi tempora commodi atque
          eaque culpa impedit laboriosam delectus, minima blanditiis, alias
          natus nisi nulla dolorem dolor consequuntur nesciunt quod. Dolor sit
          fugit excepturi molestiae earum nihil natus voluptates distinctio
          recusandae dignissimos cupiditate, consectetur aperiam sed nam sequi!
          Laborum beatae odio ex commodi optio minima dolore ab,
          <br />
          <br />
          sint deserunt eum modi non totam ut minus nesciunt quaerat rem
          possimus fuga expedita, laudantium nihil iusto. Sequi laborum
          quibusdam repellat placeat officiis doloremque magni ullam unde cum
          exercitationem! Numquam maiores minima similique? Minima aspernatur in
          assumenda odio. Velit unde delectus laboriosam, nisi harum incidunt
          necessitatibus fugiat, inventore obcaecati voluptatibus et quisquam
          animi. Quisquam beatae debitis perferendis ut quos vel ullam
          cupiditate! Voluptatem doloremque odio magni, nam eaque officia
          dolorum harum possimus omnis veritatis ullam quam id ratione
          dignissimos, aliquam saepe error voluptate labore, expedita voluptas
          eligendi? Quaerat placeat rem, nulla porro obcaecati odit libero,
          ducimus quibusdam nobis itaque explicabo aut aliquid perspiciatis
          praesentium, distinctio in eveniet magni autem quia. Consequuntur modi
          autem ullam eveniet facere, voluptate cumque in quisquam laborum quis
          veniam maxime? Tempore quis voluptas dolorum cumque, quo id
          voluptatum? Debitis blanditiis incidunt eligendi eum perferendis
          consectetur sint cupiditate aspernatur, explicabo, corrupti dolorem
          molestias. Quasi veritatis eligendi voluptates animi maiores saepe
          distinctio? Tempora voluptate incidunt corrupti provident! Laudantium
          mollitia non blanditiis saepe suscipit ipsam accusantium natus error,
          reprehenderit unde sapiente nihil obcaecati repellendus voluptatibus
          omnis et id explicabo, quos ipsa laborum? Officia, aliquid vel nostrum
          delectus tempora quod earum modi voluptatibus, rem pariatur, et
          cupiditate! Consectetur in odit dolores cumque animi fuga!
          Voluptatibus optio non numquam eveniet voluptas quibusdam maxime
          dolor, a blanditiis, pariatur explicabo cumque rem nisi repellendus
          amet, tempora nostrum. Modi voluptates, explicabo nesciunt
          voluptatibus optio omnis mollitia temporibus ipsa? Molestiae
          recusandae esse aliquam sint omnis, consequuntur illo at, fugit
          accusantium voluptas fugiat ipsam voluptatibus aliquid modi est
          debitis et non placeat, quas vel fuga nobis!
          <br />
          <br />
          Fuga facere, corrupti, eum laboriosam fugit reiciendis autem dicta
          veniam nobis itaque tenetur illo dolores blanditiis vero. Nisi a
          maiores explicabo ipsam incidunt ducimus voluptatibus asperiores ipsum
          natus itaque cum facere hic exercitationem, magni architecto possimus
          illo. Rem, magnam dolore ex doloribus possimus illo natus modi dolor
          sapiente unde, soluta pariatur quia voluptatem repellat laudantium sit
          a ullam cumque tenetur? Earum alias pariatur at aspernatur, quisquam
          iure, quasi laborum eaque nobis odit rerum, voluptatibus sit expedita
          sequi reprehenderit sunt. Soluta unde animi, culpa quasi dolor rerum
          mollitia porro velit vel fuga explicabo eligendi illum maxime quaerat
          voluptatem totam modi impedit doloremque ipsum sed. Laborum nemo quo
          quod dolor quas obcaecati maxime labore nobis beatae rem? Dolores in,
          adipisci pariatur maxime fuga quia temporibus commodi, tenetur
          voluptates distinctio iure dignissimos! Optio animi nesciunt in eaque
          aliquam deserunt a nisi rerum minus alias nobis ab inventore vitae
          earum, quos suscipit numquam odit repellendus sequi beatae ad ratione,
          delectus provident debitis. Repudiandae inventore eaque natus, unde
          blanditiis, dolorum similique incidunt cupiditate praesentium possimus
          error aliquid molestiae eum debitis magni deserunt, quo illo dicta
          aliquam provident aspernatur nulla ea? Dolore ullam doloremque,
          commodi eaque ex laudantium quam id numquam corporis sit atque error
          suscipit autem nisi, accusamus minus debitis perspiciatis facere
          accusantium rem odit ratione? Labore cupiditate, obcaecati aliquam
          sapiente libero id porro, non distinctio necessitatibus ipsa
          molestiae? Deleniti, exercitationem optio iure, quas repudiandae culpa
          dolores ut beatae, pariatur incidunt perferendis. Blanditiis, maiores.
          Aspernatur commodi voluptas quisquam in iure labore maxime tempora nam
          optio quas suscipit facilis dignissimos officia totam blanditiis,
          eligendi nihil asperiores odio ratione magni pariatur omnis delectus.
          Unde dolorem numquam magni! Veritatis libero delectus hic quod esse,
          inventore neque est nisi quia reprehenderit impedit, voluptatum
          quaerat tenetur aperiam magni iusto minima labore fugit in quas,
          sapiente numquam.
        </p>
      </div>
    </div>
  );
};

export default Medicine;
