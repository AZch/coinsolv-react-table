export default ({ searchItems }: { searchItems: (value: string) => void }) => (
  <div className="field has-addons has-addons-right">
    <div className="control">
      <input className="input" type="text" placeholder="Find a country"
             onChange={(e) => searchItems(e.target.value)}/>
    </div>
  </div>
)